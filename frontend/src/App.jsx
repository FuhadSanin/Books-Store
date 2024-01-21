import React from "react"
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Books, Home } from "./pages"

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
    </Routes>

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
