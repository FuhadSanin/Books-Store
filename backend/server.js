import express, { urlencoded } from "express"
import MongoDB from "mongodb"
import dotenv from "dotenv"
import cors from "cors"
import booksRouter from "./api/books.routes.js"
import BooksDAO from "./dao/booksDAO.js"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use("/", booksRouter)
app.use("*", (req, res) => {
  res.status(404).send("Error 404: Page not found")
})

const MongoDBClient = MongoDB.MongoClient

MongoDBClient.connect(process.env.DATABASE_URI)
  .then(async client => {
    await BooksDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`Server at http://localhost:${port}`)
    })
  })
  .catch(error => {
    console.log(`Error connecting to MongoDB: ${error}`)
  })
