
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const URI = process.env.MONGODB_URI || "mongodb://user:password1@ds229290.mlab.com:29290/heroku_9xr9wpnq"
mongoose.connect(URI, {
  useMongoClient: true
});

// add in routes
app.use(require("./routes/routes"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  