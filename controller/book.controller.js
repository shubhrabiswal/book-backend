const Book = require("../model/book");


exports.addBook = (req, res) => {

    let book_file = [];

  if (req.files.length > 0) {
    book_file = req.files.map((file) => {
      return { bookpost: file.location };
    });
  }

  const book =  new Book ({
    bookname: req.body.bookname,
    book_file,
    author: req.body.author
  })

  book.save((error, story) => {
    if (error) return res.status(400).json({ error });
    if (book) {
      res.status(201).json({ book, files: req.files });
    }
  });
};

exports.getAll = async (req, res) => {
    const book = await Book.find() 
      .exec();
  
    res.status(200).json({ book });
  };

exports.getviewcount = async(req, res) => {
  const user_id = req.user._id;
  const book_id = req.params.sid;
  // console.log(user_id)
  // console.log(req.user)
  await Book.findOne({ _id : book_id }).exec( (error, book) => {
        if (error) return res.status(400).json({ error });
        if (book) {
            console.log(book);
        }
  });     
}