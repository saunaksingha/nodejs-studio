const express = require("express");

const app = express();
const PORT = 8000;

const books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];

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
app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
