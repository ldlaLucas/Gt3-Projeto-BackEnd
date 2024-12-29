const User = require('../models/user');

// Cria um novo usuário
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);  // Retorna 201 Created e o usuário criado
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Obtém todos os usuários
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);  // Retorna 200 OK e a lista de usuários
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Obtém um usuário por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });  // Retorna 404 Not Found se o usuário não for encontrado
    }
    res.status(200).json(user);  // Retorna 200 OK e os dados do usuário
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Atualiza um usuário por ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });  // Retorna 404 Not Found se o usuário não for encontrado
    }
    await user.update(req.body);
    res.status(200).json(user);  // Retorna 200 OK e os dados do usuário atualizado
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};

// Exclui um usuário por ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });  // Retorna 404 Not Found se o usuário não for encontrado
    }
    await user.destroy();
    res.status(204).send();  // Retorna 204 No Content após exclusão bem-sucedida
  } catch (error) {
    res.status(400).json({ error: error.message });  // Retorna 400 Bad Request em caso de erro
  }
};
