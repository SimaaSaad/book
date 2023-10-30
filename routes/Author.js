const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/Author');

// Route pour ajouter un nouvel auteur
router.post('/', AuthorController.addAuthor);

module.exports = router;
