import axios from "axios"

export default axios.create({
  baseURL: "https://mongodb-books-store.onrender.com",
  headers: {
    "Content-type": "application/json",
  },
})
