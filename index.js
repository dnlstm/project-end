const express = require("express");
const app = express();
const port = 5000;
const config = require("./config/key");
const { User } = require("./models/User");

// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.join());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((arr) => console.log(arr));

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/register ", async (req, res) => {
  const user = new User(req, body);
  await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        success: false,
        err: err,
      });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
