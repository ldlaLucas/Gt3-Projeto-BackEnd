const ProductImage = require('../models/productImage');

// Cria uma nova imagem de produto
exports.createProductImage = async (req, res) => {
  try {
    const productImage = await ProductImage.create(req.body);
    res.status(201).json(productImage);  // Retorna 201 Created e a imagem criada
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Obtém todas as imagens de produtos
exports.getAllProductImages = async (req, res) => {
  try {
    const productImages = await ProductImage.findAll();
    res.status(200).json(productImages);  // Retorna 200 OK e a lista de imagens
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Obtém uma imagem de produto por ID
exports.getProductImageById = async (req, res) => {
  try {
    const productImage = await ProductImage.findByPk(req.params.id);
    if (!productImage) {
      return res.status(404).json({ error: 'ProductImage not found' });  // Retorna 404 Not Found se a imagem não for encontrada
    }
    res.status(200).json(productImage);  // Retorna 200 OK e os dados da imagem
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Atualiza uma imagem de produto por ID
exports.updateProductImage = async (req, res) => {
  try {
    const productImage = await ProductImage.findByPk(req.params.id);
    if (!productImage) {
      return res.status(404).json({ error: 'ProductImage not found' });  // Retorna 404 Not Found se a imagem não for encontrada
    }
    await productImage.update(req.body);
    res.status(200).json(productImage);  // Retorna 200 OK e os dados da imagem atualizada
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Exclui uma imagem de produto por ID
exports.deleteProductImage = async (req, res) => {
  try {
    const productImage = await ProductImage.findByPk(req.params.id);
    if (!productImage) {
      return res.status(404).json({ error: 'ProductImage not found' });  // Retorna 404 Not Found se a imagem não for encontrada
    }
    await productImage.destroy();
    res.status(204).send();  // Retorna 204 No Content após exclusão bem-sucedida
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};
