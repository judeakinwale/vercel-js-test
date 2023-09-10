const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.status(200).send("Ridge API in '/api' Works!!!");
});


module.exports = app