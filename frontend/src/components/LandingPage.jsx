import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/image.png";
import bg from "../assets/bg.png"
import "../App.css";
import { SlArrowDown } from "react-icons/sl";
import { IoArrowForwardSharp } from "react-icons/io5";

const LandingPage = () => {
  return (
    
      <div className="container-fluid">

        <div className="row">
        <div className="col-6 nav justify-content-start align-items-center">
          <h1 className=" pl-5 pt-4 pb-0">BOOKly</h1>
        </div>
      </div>
        <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="col-12 heading">
          <h1>CAPITVATING</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <img src={img} alt="image" />
          <br />
          <h2 className="text-center display-2">UNLEASHED</h2>
        </div>
        <div className="col-6 d-flex justify-content-start align-items-center flex-row ps-5">
          <h1 className="rotate-text text-border ps-5 pe-4 mb-4">BOOK</h1>
          <div className="d-flex justify-content-start align-items-center flex-column">
            <SlArrowDown className="arrow" />
            <SlArrowDown className="arrow" />
            <SlArrowDown className="outarrow" />
            <SlArrowDown className="outarrow" />
            <h1 className="text">Click here to Login</h1>
            <div className="left_arrow">
              <IoArrowForwardSharp />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="square"></div>
      </div>
    
  );
};

export default LandingPage;
