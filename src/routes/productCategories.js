const express = require('express');
const router = express.Router();
const ProductCategoryController = require('../controllers/productCategoryController');

// Rotas para associar e desassociar produtos e categorias
router.post('/', ProductCategoryController.associateProductCategory);
router.delete('/', ProductCategoryController.disassociateProductCategory);

// Adiciona a rota GET para listar todas as associações
router.get('/', ProductCategoryController.getAllProductCategories);

module.exports = router;
