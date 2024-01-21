import React, { useState, useEffect } from "react"
import { offer, bookDemo, richdad } from "../../assets"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import Cards from "./Cards"
import BooksService from "../../services/services.js"
import SummerSale from "./Summer-Sale"
import Explore from "./Explore"
import Trending from "./Trending.jsx"
import SellBooks from "./SellBooks.jsx"

const Books = () => {
  const [books, setBooks] = useState([])
  const [searchTitle, setSearchTitle] = useState("")

  useEffect(() => {
    retrieveBooks()
  }, [])

  const retrieveBooks = () => {
    BooksService.getBooks()
      .then(response => {
        setBooks(response.data.books)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(searchTitle)
    BooksService.searchBooks(searchTitle)
      .then(response => {
        setBooks(response.data.books)
        setSearchTitle("")
      })
      .catch(e => {
        console.log(e)
      })
  }
  console.log(books)
  return (
    <section className="container-fluid">
      <div className="row" style={{ height: "60px" }}>
        <div className="col-12 nav justify-content-around align-items-center">
          <Link to="/">BOOKly</Link>
          <Link to="/books">Books</Link>
        </div>
      </div>
      <Explore />
      <h1
        className="h1 text-center mt-5 mb-5 font-extrabold"
        style={{ color: "#d4a373", fontSize: "50px" }}
      >
        TOP SALE
      </h1>
      <div className="container col-12 d-flex justify-content-center align-items-center">
        <form className="d-flex form-inline my-lg-0" style={{ width: "80%" }}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for books here ..."
            aria-label="Search"
            value={searchTitle}
            onChange={e => setSearchTitle(e.target.value)}
            style={{ fontFamily: "Playfair Display" }} // Apply Playfair font to input
          />
          <button className="btn-small text-center " onClick={handleSubmit}>
            <FaSearch style={{ fontFamily: "Playfair Display" }} />{" "}
          </button>
        </form>
      </div>
      {books.length > 0 ? (
        <div
          className="container pt-10 pb-12 h-auto d-flex flex-wrap justify-content-center align-items-center gap-12 border-none"
          style={{ width: "80%" }}
        >
          {books.map((book, index) => (
            <Cards key={index} book={book} />
          ))}
        </div>
      ) : (
        <div className="container h-64 d-flex flex-col justify-content-center align-items-center">
          <p className="h3 font-[PlayFair] text-gray-500">No books found</p>
          <button onClick={handleSubmit} className="btn">
            GO BACK
          </button>
        </div>
      )}
      <SummerSale />
      <Trending books={books} />
    </section>
  )
}

export default Books
