import BooksDAO from "../dao/booksDAO.js"

export default class BooksController {
  static async apiGetBooks(req, res, next) {
    let filters = {}
    if (req.query.title) {
      filters.title = req.query.title
    } else if (req.query.author) {
      filters.author = req.query.author
    } else if (req.query.genre) {
      filters.genre = req.query.genre
    }

    const { booksList, totalNumBooks } = await BooksDAO.getBooks({
      filters,
    })

    let response = {
      books: booksList,
      filters: filters,
      total_results: totalNumBooks,
    }
    res.json(response)
  }
  static async apiSellBooks(req, res, next) {
    try {
      const title = req.body.title
      const author = req.body.author
      const discountedPrice = req.body.discount_price
      const description = req.body.description
      const imageUrl = req.body.image
      const actualPrice = req.body.actual_price
      const percentageOff = req.body.percentage_off

      const bookinfo = await BooksDAO.sellBooks(
        title,
        author,
        discountedPrice,
        description,
        imageUrl,
        actualPrice,
        percentageOff,
      )

      console.log("Received data:", req.body)
      res.status(200).json({ status: "Add success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
