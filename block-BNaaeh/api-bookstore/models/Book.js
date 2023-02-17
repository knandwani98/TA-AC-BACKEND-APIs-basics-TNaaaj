var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  author: String,
  country: String,
  imageLink: String,
  language: String,
  link: String,
  pages: Number,
  title: String,
  year: Number,
});

module.exports = mongoose.model("Book", bookSchema);
