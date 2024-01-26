import React from "react"
import { offer, bookDemo } from "../../assets"
import { Link } from "react-router-dom"

const Cards = ({ book }) => {
  return (
    <div
      className="card border-none bg-transparent d-flex align-items-center justify-content-end"
      style={{ width: "250px", height: "450px", borderRadius: "50px" }}
    >
      <div
        className="card-details bg-white d-flex align-items-center justify-content-center"
        style={{
          width: "250px",
          height: "350px",
          borderRadius: "50px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Example book card content */}
        <div
          className="h4 position-absolute top-[20%] right-0 text-white d-flex text-center align-items-center justify-content-center"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#C80000",
            borderRadius: "50%",
            fontFamily: "PlayFair",
          }}
        >
          {book.percentage_off}%
        </div>
        <div
          className="position-absolute top-0 mb-12"
          style={{
            width: "140px",
            height: "200px",
          }}
        >
          {/* Example book image */}
          {book.imageUrl ? (
            <img src={book.imageUrl} alt={book.title} />
          ) : (
            <img src={bookDemo} alt={book.title} />
          )}
        </div>
        <div
          className="container d-flex flex-col text-center"
          style={{ height: "50px" }}
        >
          {/* Example book details */}
          <p
            className="h3 font-semibold"
            style={{
              fontFamily: "PlayFair",
              color: "#3B6064",
            }}
          >
            {book.title}
          </p>
          <p
            className="h5 font-extralight"
            style={{
              fontFamily: "PlayFair",
              color: "#868686",
            }}
          >
            {book.author}
          </p>
          {/* Example book price */}
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-6">
              <p
                className="h3"
                style={{
                  fontFamily: "PlayFair",
                  color: "#C80000",
                }}
              >
                ${book.discount_price}
              </p>
            </div>
            {/* Example book discounted price */}
            <div className="col-4">
              <p
                className="h4"
                style={{
                  fontFamily: "PlayFair",
                  color: "#868686",
                  textDecoration: "line-through",
                }}
              >
                {book.actual_price}
              </p>
            </div>
          </div>
          <Link
            to={`/books/${book._id}`}
            className="position-absolute bottom-3 justify-center w-100 pr-3"
          >
            <button className="btn align-self-center">VIEW MORE</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cards
