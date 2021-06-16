const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate")
const bookcontroller = require("../controller/book.controller")

router.post("/book/addbook", bookcontroller.addBook)


module.exports = router;
  