const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { firstname, surname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ firstname, surname, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { firstname, surname, email } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update({ firstname, surname, email });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'firstname', 'surname', 'email'] // Não incluir a senha
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
