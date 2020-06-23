
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const URI = process.env.MONGODB_URO || "mongodb://localhost/workout"
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// add in routes
app.use(require("./routes/routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  