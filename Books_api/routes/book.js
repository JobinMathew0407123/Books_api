import express from "express";
import {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/book.js";

const router = express.Router();
//Getting Details of all books
router.get("/", getBooks);
//Getting Details of Books by id
router.get("/:id", getBookById);
//Adding books
router.post("/", addBook);
//updating books by Id
router.put("/:id", updateBook);
//deleting books by Id
router.delete("/:id", deleteBook);

export default router;
