import { Router } from "express"
import BooksController from "./books.controller.js"

const router = Router()

router.route("/").get(BooksController.apiGetBooks)

router.route("/books").post(BooksController.apiSellBooks)

export default router
