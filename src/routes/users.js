const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');  // Certifique-se de que o caminho está correto

// Rota para criar um novo usuário
router.post('/', UserController.createUser);

// Rota para listar todos os usuários
router.get('/', UserController.getAllUsers);

// Rota para obter um usuário por ID
router.get('/:id', UserController.getUserById);

// Rota para atualizar um usuário por ID
router.put('/:id', UserController.updateUser);

// Rota para excluir um usuário por ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;
