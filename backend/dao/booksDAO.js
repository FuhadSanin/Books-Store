let books
import { ObjectId } from "mongodb"

export default class BooksDAO {
  static async injectDB(conn) {
    if (books) {
      return
    }
    try {
      books = await conn.db(process.env.DATABASE_NAME).collection("books")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }
  static async getBooks({ filters = null }) {
    let query
    if (filters) {
      if ("title" in filters) {
        query = { $text: { $search: filters["title"] } } //text is checking the whole title
      } else if ("author" in filters) {
        query = { author: { $eq: filters["author"] } }
      } else if ("genre" in filters) {
        query = { genre: { $eq: filters["genre"] } }
      }
    }
    let cursor
    try {
      cursor = await books.find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { booksList: [], totalNumBooks: 0 }
    }
    const displayCursor = cursor.limit(20).skip(0) //This is the limit of the books that will be displayed on the page and the skip is the number of books that will be skipped
    try {
      const booksList = await displayCursor.toArray()
      const totalNumBooks = await books.countDocuments(query)
      return { booksList, totalNumBooks }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      )
      return { booksList: [], totalNumBooks: 0 }
    }
  }
  static async sellBooks(
    title,
    author,
    discountedPrice,
    description,
    imageUrl,
    actualPrice,
    percentageOff
  ) {
    try {
      const bookinfo = {
        _id: new ObjectId(),
        title: title,
        author: author,
        discount_price: discountedPrice,
        description: description,
        imageUrl: imageUrl,
        actual_price: actualPrice,
        percentage_off: percentageOff,
      }
      return await books.insertOne(bookinfo)
    } catch (e) {
      console.error(`Unable to post book: ${e}`)
      return { error: e }
    }
  }
}
