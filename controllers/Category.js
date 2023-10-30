const Category = require('../models/Category');

const addCategory = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({
    title: title,
  });

  newCategory
    .save()
    .then((category) =>
      res.status(201).json({
        model: category,
        message: 'Category created!',
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
  addCategory: addCategory,
};
