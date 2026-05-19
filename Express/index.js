const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.end("Homepage");
});
app.get("/contact-us", function (req, res) {
  res.end("You can contact me at my email address example@gmail.com");
});
app.post("/tweets", function (req, res) {
  res.status(201).end("Tweet created successfully");
});

app.listen(8000, function () {
  console.log("Server is running on port 8000");
});
