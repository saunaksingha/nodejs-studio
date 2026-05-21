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

app.use(express.json());

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

  console.log(title);
  const book = { id: books.length, title, author };
  books.push(book);
  res.json({ message: "Books created successfully" });
});
app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
