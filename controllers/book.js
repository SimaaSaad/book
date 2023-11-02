const Book=require("../models/Book")



const fetchBooks =(req,res)=>{
    Book.find()
      .populate("author")
      .populate("categories")
      .then((books) =>
        res.status(200).json({
          model: books,
          message: "success",
        })
      )
  
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "probleme d'extraction",
        });
      });}
const getBookById=(req,res)=>{
    Book.findOne({_id:req.params.id})
    .populate("author")
    .populate("categories")
    .then((books) => {
      if(!books){
        res.status(404).json({
          message:"livre npon trouve"
        })
        return
      }
  
     res.status(200).json({
      model: books,
      message:"objet trouve"
     })
   })
   .catch((error) => {
   
     res.status(400).json({
       error:error.message,
       message:"probleme ",
     });
   });
  }
  
  const addBook = (req, res) => {
    const { title, author, description, nbPages, language, categories, genres, keywords } = req.body;
    const newBook = new Book({
      title: title,
      author: author, // Utilisez l'ID de l'auteur ici
      description: description,
      nbPages: nbPages,
      language: language,
      categories: categories, // Utilisez les ID des catégories ici
      genres: genres,
      keywords: keywords,
    });
  
    newBook
      .save()
      .then((book) =>
        res.status(201).json({
          model: book,
          message: 'Book created!',
        })
      )
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: 'Invalid data',
        });
      });
  };
  
  

//modifier
const UpdateBook=(req, res) => {
    Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((book) => {
        if (!book) {
          res.status(404).json({
            message: "Book not found ",
          });
          return;
        }
        res.status(200).json({
          model: book,
          message: "Book updated",
        });
      })
      .catch((error) =>
        res.status(400).json({
          error: error.message,
          message: "book not correct",
        })
      );
  }


const DeleteBook=(req, res) => {
    Book.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Book  deleted" }))
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "Id book not correct ",
        });
      });
  }

 module.exports={
    fetchBooks:fetchBooks,
    addBook:addBook,
    getBookById:getBookById,
    UpdateBook:UpdateBook,
    DeleteBook:DeleteBook
 }