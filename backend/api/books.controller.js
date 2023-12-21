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
}
