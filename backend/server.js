require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");


const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // Listen for requests
    const server = app.listen(process.env.PORT, () => {
      console.log("Listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
