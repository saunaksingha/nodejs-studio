const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8000;

const books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];

app.use(express.json());

app.use((req, res, next) => {
  const log = `\n${Date.now()}-${req.method}-${req.path}`;
  fs.appendFileSync("logs.txt", log, "utf-8");
  next();
});

//Routes

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  console.log(`Requested id is ${id}`);
  if (isNaN(id)) {
    res.status(400).json({ error: "I'd must be of type number" });
  }
  const book = books.find((e) => e.id == id);
  if (!book) {
    res.status(404).json({ error: `id ${id} doesn't exists` });
  } else {
    res.json(book);
  }
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author || title === "" || author === "") {
    return res
      .status(400)
      ._construct.json({ error: "Title & Author are required" });
  }

  const book = { id: books.length + 1, title: title, author: author };
  books.push(book);
  res.status(201).json({ message: "Books created successfully" });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "I'd must be of type number" });
  }
  const bookIndexToDelete = books.findIndex((e) => e.id === id);

  if (bookIndexToDelete < 0) {
    return res.status(404).json({ error: `id ${id} doesn't exists` });
  }

  books.splice(bookIndexToDelete, 1);

  return res.status(200).json({ message: "Book deleted successfully" });
});
app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
