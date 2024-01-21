import React from "react"
import { offer, richdad } from "../../assets"
import SellBooks from "./SellBooks"

const SummerSale = () => {
  return (
    <div
      className="container pt-10 pb-10 h-auto d-flex flex-wrap justify-content-center align-items-center  border-none "
      style={{ width: "80%" }}
    >
      <div
        className="card h-auto border-none bg-transparent d-flex flex-wrap align-items-center justify-content-end"
        style={{
          width: "90%",
          borderRadius: "50px",
        }}
      >
        <div
          className="card-details col-12  bg-[#3B6064] d-flex flex-wrap align-items-center justify-content-around"
          style={{
            height: "auto",
            borderRadius: "50px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className="h1 p-10 font-black"
            style={{
              fontFamily: "PlayFair",
              color: "#E7ECEF",
              fontSize: "90px",
            }}
          >
            SUMMER <br /> SALE
          </div>
          <div
            className="position-absolute top-0 mb-12"
            style={{
              width: "400px",
              height: "400px",
            }}
          >
            <img src={richdad} alt="" />
          </div>
          <div
            className="h1 d-flex flex-col justify-content-center align-items-center gap-3"
            style={{
              color: "#E7ECEF",
              fontSize: "55px",
              fontWeight: "bolder",
            }}
          >
            GET 50% <br /> OFFER
            <SellBooks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummerSale
