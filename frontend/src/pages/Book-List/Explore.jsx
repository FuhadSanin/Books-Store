import React from "react"
import { offer } from "../../assets"
const Explore = () => {
  return (
    <div
      className="row text-white"
      style={{ backgroundImage: `url(${offer})`, height: "70px" }}
    >
      <div className="col-12 gap-10 d-flex justify-content-center align-items-center">
        <p
          className="h1"
          style={{ fontFamily: "The Nautigal", letterSpacing: "8px" }}
        >
          Exploere 10+ books in Summer Sale
        </p>
        <a href="">
          <button className="btn">VIEW MORE</button>
        </a>
      </div>
    </div>
  )
}

export default Explore
