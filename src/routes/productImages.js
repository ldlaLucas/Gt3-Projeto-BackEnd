const express = require('express');
const router = express.Router();
const ProductImageController = require('../controllers/productImageController');

// Rotas CRUD para imagens de produtos
router.post('/', ProductImageController.createProductImage);
router.get('/', ProductImageController.getAllProductImages);
router.get('/:id', ProductImageController.getProductImageById);
router.put('/:id', ProductImageController.updateProductImage);
router.delete('/:id', ProductImageController.deleteProductImage);

module.exports = router;
