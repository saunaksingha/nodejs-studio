const express = require("express");

const bookstoreRouter = require("./routes/books.routes.js");

const { loggerMiddlewares } = require("./middlewares/logger.js");

const app = express();
const PORT = 8000;

app.use(express.json());

app.use(loggerMiddlewares);

app.use("/", bookstoreRouter);
//Routes

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
