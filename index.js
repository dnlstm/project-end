const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://alfnskfk:alfnvv!2@cluster0.ujagqye.mongodb.net/?retryWrites=true&w=majority",
    {
      // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAnModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((arr) => console.log(arr));

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
