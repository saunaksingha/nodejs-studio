const express = require("express");

const router = express.Router();

const { BOOKS } = require("../db/books.js");

router.get("/books", (req, res) => {
  res.json(BOOKS);
});

router.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  console.log(`Requested id is ${id}`);
  if (isNaN(id)) {
    res.status(400).json({ error: "I'd must be of type number" });
  }
  const book = BOOKS.find((e) => e.id == id);
  if (!book) {
    res.status(404).json({ error: `id ${id} doesn't exists` });
  } else {
    res.json(book);
  }
});

router.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author || title === "" || author === "") {
    return res
      .status(400)
      ._construct.json({ error: "Title & Author are required" });
  }

  const book = { id: BOOKS.length + 1, title: title, author: author };
  BOOKS.push(book);
  res.status(201).json({ message: "Books created successfully" });
});

router.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "I'd must be of type number" });
  }
  const bookIndexToDelete = BOOKS.findIndex((e) => e.id === id);

  if (bookIndexToDelete < 0) {
    return res.status(404).json({ error: `id ${id} doesn't exists` });
  }

  BOOKS.splice(bookIndexToDelete, 1);

  return res.status(200).json({ message: "Book deleted successfully" });
});

module.exports = router;
