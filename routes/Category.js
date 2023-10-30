const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/Category');

// Route pour ajouter une nouvelle catégorie
router.post('/', CategoryController.addCategory);

module.exports = router;
