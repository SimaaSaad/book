const Author = require('../models/Author');

const addAuthor = (req, res) => {
  const { lastName, firstName, nationality } = req.body;
  const newAuthor = new Author({
    lastName: lastName,
    firstName: firstName,
    nationality: nationality,
  });

  newAuthor
    .save()
    .then((author) =>
      res.status(201).json({
        model: author,
        message: 'Author created!',
      })
    )
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: 'Invalid data',
      });
    });
};

module.exports = {
  addAuthor: addAuthor,
};
