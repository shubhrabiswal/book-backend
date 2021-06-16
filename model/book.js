const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookname:{
      type: String
  },
  book_file: [
    { bookpost: { type: String } }
],
author:{
    type:String
}
});


const Book = mongoose.model("BOOK", bookSchema);
module.exports = Book;