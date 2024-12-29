const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definição do modelo de categoria
const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  // O ID será incrementado automaticamente
    primaryKey: true,     // Define a chave primária
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,     // O campo é obrigatório
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,     // O campo é obrigatório
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,  // Valor padrão é 0 (falso)
  },
}, {
  timestamps: true,       // Adiciona created_at e updated_at automaticamente
});

module.exports = Category;
