const Category = require('../models/Category');

// Função para obter uma lista de categorias
exports.getCategories = async (req, res) => {
  const { limit = 12, page = 1, fields, use_in_menu } = req.query;
  const offset = (page - 1) * limit;
  const query = {};

  if (fields) {
    query.attributes = fields.split(',');
  }

  if (use_in_menu) {
    query.where = { use_in_menu: use_in_menu === 'true' };
  }

  try {
    const { count, rows } = await Category.findAndCountAll({
      ...query,
      limit: limit !== '-1' ? parseInt(limit) : undefined,
      offset: limit !== '-1' ? offset : undefined,
    });
    res.status(200).json({
      data: rows,
      total: count,
      limit: parseInt(limit),
      page: parseInt(page)
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Função para obter uma categoria por ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });  // Retorna 404 Not Found se a categoria não for encontrada
    }
    res.status(200).json(category);  // Retorna 200 OK e os dados da categoria
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Função para criar uma nova categoria
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);  // Retorna 201 Created e a categoria criada
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Função para atualizar uma categoria por ID
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });  // Retorna 404 Not Found se a categoria não for encontrada
    }
    await category.update(req.body);
    res.status(204).send();  // Retorna 204 No Content após atualização bem-sucedida
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Função para excluir uma categoria por ID
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });  // Retorna 404 Not Found se a categoria não for encontrada
    }
    await category.destroy();
    res.status(204).send();  // Retorna 204 No Content após exclusão bem-sucedida
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Obtém todas as categorias
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories); // Retorna 200 OK e a lista de categorias
  } catch (error) {
    res.status(400).json({ error: error.message }); // Retorna 400 Bad Request em caso de erro
  }
};

