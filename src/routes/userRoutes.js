const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/v1/user/:id', UserController.getUserById);
router.post('/v1/user', UserController.createUser);
router.put('/v1/user/:id', UserController.updateUser);
router.delete('/v1/user/:id', UserController.deleteUser);
module.exports = router;
