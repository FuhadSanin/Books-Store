import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import CreatBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import BackButton from "./components/BackButton";

const App = () => {
  return (
    <LandingPage/>
    // <Routes>
    //   {
    //   /* <Route exact path="/" element={<Home />} />
    //   <Route path="/books/create" element={<CreatBook />} />
    //   <Route path="/books/details/:id" element={<ShowBook />} />
    //   <Route path="/books/edit/:id" element={<EditBook />} />
    //   <Route path="/books/delete/:id" element={<DeleteBook />} /> */}
      
    // </Routes>
  );
};

export default App;
