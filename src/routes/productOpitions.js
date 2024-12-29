const express = require('express');
const router = express.Router();
const ProductOptionController = require('../controllers/productOptionController');

// Rotas CRUD para opções de produtos
router.post('/', ProductOptionController.createProductOption);
router.get('/', ProductOptionController.getAllProductOptions);
router.get('/:id', ProductOptionController.getProductOptionById);
router.put('/:id', ProductOptionController.updateProductOption);
router.delete('/:id', ProductOptionController.deleteProductOption);

module.exports = router;
