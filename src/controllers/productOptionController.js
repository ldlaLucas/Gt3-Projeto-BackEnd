const ProductOption = require('../models/productOption');

// Cria uma nova opção de produto
exports.createProductOption = async (req, res) => {
  try {
    const productOption = await ProductOption.create(req.body);
    res.status(201).json(productOption);  // Retorna 201 Created e a opção criada
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Obtém todas as opções de produtos
exports.getAllProductOptions = async (req, res) => {
  try {
    const productOptions = await ProductOption.findAll();
    res.status(200).json(productOptions);  // Retorna 200 OK e a lista de opções
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Obtém uma opção de produto por ID
exports.getProductOptionById = async (req, res) => {
  try {
    const productOption = await ProductOption.findByPk(req.params.id);
    if (!productOption) {
      return res.status(404).json({ error: 'ProductOption not found' });  // Retorna 404 Not Found se a opção não for encontrada
    }
    res.status(200).json(productOption);  // Retorna 200 OK e os dados da opção
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Atualiza uma opção de produto por ID
exports.updateProductOption = async (req, res) => {
  try {
    const productOption = await ProductOption.findByPk(req.params.id);
    if (!productOption) {
      return res.status(404).json({ error: 'ProductOption not found' });  // Retorna 404 Not Found se a opção não for encontrada
    }
    await productOption.update(req.body);
    res.status(200).json(productOption);  // Retorna 200 OK e os dados da opção atualizada
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Exclui uma opção de produto por ID
exports.deleteProductOption = async (req, res) => {
  try {
    const productOption = await ProductOption.findByPk(req.params.id);
    if (!productOption) {
      return res.status(404).json({ error: 'ProductOption not found' });  // Retorna 404 Not Found se a opção não for encontrada
    }
    await productOption.destroy();
    res.status(204).send();  // Retorna 204 No Content após exclusão bem-sucedida
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};
