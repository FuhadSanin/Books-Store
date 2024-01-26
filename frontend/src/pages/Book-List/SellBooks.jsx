import React, { useState } from "react"
import BooksService from "../../services/services.js"
import toast from "react-hot-toast"

const SellBooks = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [discount_price, setDiscount_price] = useState("")
  const [description, setDescription] = useState("")
  const [actual_price, setActual_Price] = useState("")
  const [image, setImage] = useState("")

  const handleSell = async e => {
    try {
      const data = {
        title,
        author,
        discount_price: Number(discount_price),
        description,
        actual_price: Number(actual_price),
        image,
        percentage_off: Math.floor(
          ((Number(actual_price) - Number(discount_price)) /
            Number(actual_price)) *
            100
        ),
      }

      if (
        data.title &&
        data.author &&
        data.discount_price &&
        data.description &&
        data.actual_price &&
        data.image &&
        data.percentage_off
      ) {
        const response = await BooksService.sellBooks(data)

        console.log(response.data)
        toast.success("Book Added Successfully", {
          position: "top-center",
        })

        // Reset form after successful submission
        setTitle("")
        setAuthor("")
        setDiscount_price("")
        setDescription("")
        setActual_Price("")
        setImage("")
        setPercentage_off("")
      } else {
        toast.error("Please fill all the fields")
      }
    } catch (error) {
      console.error(error)
      toast.error("Error adding book. Please try again.")
    }
  }

  return (
    <>
      <button
        type="button"
        className="btn"
        style={{ backgroundColor: "#E7ECEF", color: "black" }}
        data-toggle="modal"
        data-target="#exampleModal"
      >
        SELL BOOK
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{ color: "black", fontSize: "15px" }}
              >
                SELL BOOK
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{ color: "black", fontSize: "20px" }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="form-inline my-lg-0">
                <input
                  className="form-control mr-sm-2 mb-4"
                  type="search"
                  placeholder="Title"
                  aria-label="Search"
                  required
                  style={{ fontFamily: "Playfair Display" }}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                <input
                  className="form-control mr-sm-2 mb-4"
                  type="search"
                  required
                  placeholder="Author"
                  aria-label="Search"
                  style={{ fontFamily: "Playfair Display" }}
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                />
                <input
                  className="form-control mr-sm-2 mb-4"
                  type="number"
                  required
                  placeholder="discount_price"
                  aria-label="Search"
                  style={{ fontFamily: "Playfair Display" }}
                  value={discount_price}
                  onChange={e => setDiscount_price(e.target.value)}
                />
                <input
                  className="form-control mr-sm-2 mb-4"
                  type="search"
                  required
                  placeholder="description"
                  aria-label="Search"
                  style={{ fontFamily: "Playfair Display" }}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                <input
                  className="form-control mr-sm-2 mb-4"
                  type="number"
                  required
                  placeholder="actual_price"
                  aria-label="Search"
                  style={{ fontFamily: "Playfair Display" }}
                  value={actual_price}
                  onChange={e => setActual_Price(e.target.value)}
                />
                <input
                  className="form-control mr-sm-2 mb-4"
                  type="search"
                  required
                  placeholder="imageURL"
                  aria-label="Search"
                  style={{ fontFamily: "Playfair Display" }}
                  value={image}
                  onChange={e => setImage(e.target.value)}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                CLOSE
              </button>
              <button
                onClick={handleSell}
                type="button"
                className="btn btn-primary"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SellBooks
