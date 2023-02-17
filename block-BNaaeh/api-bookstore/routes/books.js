var express = require("express");
var router = express.Router();

var Book = require("../models/Book");

// List All Books
router.get("/", function (req, res, next) {
  Book.find({}, (err, books) => {
    if (err) return res.status(404).json({ err });
    res.json(books);
  });
});

// List Single Book
router.get("/:id", function (req, res, next) {
  var id = req.params.id;
  Book.findById(id, (err, book) => {
    if (err) return res.status(400).json({ err: "book not found" });
    res.json(book);
  });
});

// Create a Book
router.post("/", function (req, res, next) {
  var bookDetails = req.body;
  Book.create(bookDetails, (err, book) => {
    if (err) return res.status(400).json({ err: "book not found" });
    res.json({ message: "Book Created Successfully" });
  });
});

// Update a Book
router.put("/:id", function (req, res, next) {
  var id = req.params.id;
  var bookDetails = req.body;
  Book.findByIdAndUpdate(id, bookDetails, (err, book) => {
    if (err) return res.status(400).json({ err: "book not found" });
    res.json({ message: "Book Updated Successfully" });
  });
});

// Delete a Book
router.delete("/:id", function (req, res, next) {
  var id = req.params.id;
  Book.findByIdAndDelete(id, (err, book) => {
    if (err) return res.status(400).json({ err: "book not found" });
    res.json({ message: "Book Deleted Successfully" });
  });
});

module.exports = router;
