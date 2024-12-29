const ProductCategory = require('../models/productCategory');

// Associa um produto a uma categoria
exports.associateProductCategory = async (req, res) => {
  try {
    const { product_id, category_id } = req.body;
    const association = await ProductCategory.create({ product_id, category_id });
    res.status(201).json(association); // Retorna 201 Created e a associação criada
  } catch (error) {
    res.status(400).json({ error: error.message }); // Retorna 400 Bad Request em caso de erro
  }
};

// Desassocia um produto de uma categoria
exports.disassociateProductCategory = async (req, res) => {
  try {
    const { product_id, category_id } = req.body;
    await ProductCategory.destroy({ where: { product_id, category_id } });
    res.status(204).send(); // Retorna 204 No Content após desassociação bem-sucedida
  } catch (error) {
    res.status(400).json({ error: error.message }); // Retorna 400 Bad Request em caso de erro
  }
};

// Obtém todas as associações entre produtos e categorias
exports.getAllProductCategories = async (req, res) => {
  try {
    const associations = await ProductCategory.findAll();
    res.status(200).json(associations); // Retorna 200 OK e a lista de associações
  } catch (error) {
    res.status(400).json({ error: error.message }); // Retorna 400 Bad Request em caso de erro
  }
};
