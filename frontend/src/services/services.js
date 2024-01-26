import http from "../http-common.js"

class BooksService {
  getBooks() {
    return http.get("/")
  }
  searchBooks(query) {
    return http.get(`?title=${query}`)
  }
  sellBooks(data) {
    return http.post("/books", data)
  }
}

export default new BooksService()
