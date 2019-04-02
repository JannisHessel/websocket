const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
  .connect(`mongodb://localhost:27017/chessUser`, { useNewUrlParser: true })
  .then(console.log('Successful connection to database'))
  .catch(error => {
    console.log(`The following error occurred: ${error.message}`)
})