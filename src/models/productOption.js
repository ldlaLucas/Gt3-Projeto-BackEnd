const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');  // Importa o modelo de produto para definir a chave estrangeira

// Definição do modelo de opções do produto
const ProductOption = sequelize.define('ProductOption', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  // O ID será incrementado automaticamente
    primaryKey: true,     // Define a chave primária
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,     // O campo é obrigatório
    references: {
      model: Product,
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,     // O campo é obrigatório
  },
  shape: {
    type: DataTypes.ENUM('square', 'circle'),
    defaultValue: 'square',  // Valor padrão é "square"
  },
  radius: {
    type: DataTypes.INTEGER,
    defaultValue: 0,        // Valor padrão é 0
  },
  type: {
    type: DataTypes.ENUM('text', 'color'),
    defaultValue: 'text',   // Valor padrão é "text"
  },
  values: {
    type: DataTypes.STRING,
    allowNull: false,       // O campo é obrigatório
  },
}, {
  timestamps: true,         // Adiciona created_at e updated_at automaticamente
});

module.exports = ProductOption;
