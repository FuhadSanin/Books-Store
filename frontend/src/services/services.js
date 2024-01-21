import http from "../http-common.js"

class BooksService {
  getBooks() {
    return http.get("/books")
  }
  searchBooks(query) {
    return http.get(`/books?title=${query}`)
  }
  sellBooks(data) {
    return http.post("/books", data)
  }
}

export default new BooksService()
