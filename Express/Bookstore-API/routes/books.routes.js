const express = require("express");
const controller = require("../controllers/book.controller");
const router = express.Router();

router.get("/books", controller.getAllBooks);

router.get("/books/:id", controller.getBookByID);

router.post("/books", controller.createBook);

router.delete("/books/:id", controller.deleteBookByID);

module.exports = router;
