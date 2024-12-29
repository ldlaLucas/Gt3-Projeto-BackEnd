const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database');

// Definição do modelo de usuário
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  // O ID será incrementado automaticamente
    primaryKey: true,     // Define a chave primária
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,      // O campo é obrigatório
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,      // O campo é obrigatório
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,      // O campo é obrigatório
    unique: true,          // O email deve ser único
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,      // O campo é obrigatório
  },
}, {
  timestamps: true,       // Adiciona created_at e updated_at automaticamente
  hooks: {
    // Gera o hash da senha antes de criar o usuário
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
  },
});

module.exports = User;
