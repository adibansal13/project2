const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log("app is listening");
});

app.get("/", (req, res) => {
  res.send("aditya");
});
