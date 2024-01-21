import { Router } from "express"
import BooksController from "./books.controller.js"

const router = Router()

router
  .route("/books")
  .get(BooksController.apiGetBooks)
  .post(BooksController.apiSellBooks)

export default router
