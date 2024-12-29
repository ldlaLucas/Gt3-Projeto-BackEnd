const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');  // Importa o modelo de produto para definir a chave estrangeira

// Definição do modelo de imagem de produto
const ProductImage = sequelize.define('ProductImage', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  // O ID será incrementado automaticamente
    primaryKey: true,     // Define a chave primária
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,  // Valor padrão é 0 (falso)
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,     // O campo é obrigatório
  },
}, {
  timestamps: true,       // Adiciona created_at e updated_at automaticamente
});

module.exports = ProductImage;
