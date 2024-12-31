const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/token', authController.generateToken);

module.exports = router;
