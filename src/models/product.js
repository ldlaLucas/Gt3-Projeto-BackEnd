const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definição do modelo de produto
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  // O ID será incrementado automaticamente
    primaryKey: true,     // Define a chave primária
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,  // Valor padrão é 0 (falso)
  },
  name: {
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
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,      // Valor padrão é 0
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,     // O campo é obrigatório
  },
  price_discount: {
    type: DataTypes.FLOAT,
    allowNull: false,     // O campo é obrigatório
  },
}, {
  timestamps: true,       // Adiciona created_at e updated_at automaticamente
});

module.exports = Product;
