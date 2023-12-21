import React from "react"
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { FirstPage, SecondPage } from "./pages"

const App = () => {
  return (
    <div className="smooth">
      <FirstPage />
      <SecondPage />
    </div>
    // <Routes>
    //   {
    //   /* <Route exact path="/" element={<Home />} />
    //   <Route path="/books/create" element={<CreatBook />} />
    //   <Route path="/books/details/:id" element={<ShowBook />} />
    //   <Route path="/books/edit/:id" element={<EditBook />} />
    //   <Route path="/books/delete/:id" element={<DeleteBook />} /> */}

    // </Routes>
  )
}

export default App
