import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { bookShelf } from "../../assets"
import { AiOutlineDown } from "react-icons/ai"
import "./FirstPage.css"
import { CircularText } from "../../components"

const FirstPage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heading = document.querySelector(".heading")
      const unleashText = document.querySelector(".unleash-text")

      if (heading && unleashText) {
        const scrollPosition = window.scrollY

        heading.style.transform = `translateX(${scrollPosition * 0.3}px)`
        unleashText.style.transform = `translateX(${-scrollPosition * 0.2}px)`

        if (scrollPosition > 300) {
          // Change this value to adjust when the animation triggers
          setShouldAnimate(true)
        } else {
          setShouldAnimate(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-6 nav justify-content-start align-items-center">
          <h1 className="pl-5 pt-4 pb-0">BOOKly</h1>
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col-12 heading">
            <h1>CAPTIVATING</h1>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6 d-flex justify-content-center align-items-center flex-column">
            <img src={bookShelf} alt="image" />
            <br />
            <h2 className="text-center display-2 unleash-text">UNLEASHED</h2>
          </div>
          <div className="col-6 d-flex justify-content-start align-items-center flex-row ps-5">
            <h1
              className={`rotate-text text-border ps-5 pe-4 mb-4 ${
                shouldAnimate ? "book-scroll-animation" : ""
              }`}
            >
              BOOK
            </h1>
            <div className="d-flex justify-content-start align-items-center flex-column">
              <AiOutlineDown className="arrow" />
              <AiOutlineDown className="arrow" />
              <AiOutlineDown className="arrow" />
              <CircularText />
              <div className="left_arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstPage
