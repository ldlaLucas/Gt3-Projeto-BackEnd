const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Rota para obter uma lista de categorias
router.get('/search', categoryController.getCategories);

// Rota para obter todas as categorias
router.get('/', categoryController.getAllCategories);

// Rota para obter uma categoria por ID
router.get('/:id', categoryController.getCategoryById);

// Rota para criar uma nova categoria
router.post('/', categoryController.createCategory);

// Rota para atualizar uma categoria por ID
router.put('/:id', categoryController.updateCategory);

// Rota para excluir uma categoria por ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
