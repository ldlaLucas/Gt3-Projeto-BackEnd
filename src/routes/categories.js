const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController');

// Rotas CRUD para categorias
router.post('/', CategoryController.createCategory);
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;