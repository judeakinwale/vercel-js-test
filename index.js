const path = require("path");
// const dotenv = require("dotenv");
const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.status(200).send("Ridge API Works!!!");
});

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.status(200).send("Ridge API Works!!!");
});


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// const PORT = process.env.PORT || 8000;
const PORT = 8000;
const server = app.listen(
  PORT,
  console.log(
    `Server running in testing mode on port ${PORT}`
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close Server & exit Process

  server.close(() => process.exit(1));
});
