const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/', userController.createUser);

// Rota para obter todos os usuários
router.get('/', userController.getAllUsers);

// Rota para obter informações do usuário pelo ID
router.get('/:id', userController.getUserById);

// Rota para atualizar um usuário pelo ID
router.put('/:id', userController.updateUser);

// Rota para excluir um usuário pelo ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
