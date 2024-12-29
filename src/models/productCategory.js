const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');
const Category = require('./category');

// Definição do modelo de associação entre produtos e categorias
const ProductCategory = sequelize.define('ProductCategory', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id',
    },
  },
}, {
  timestamps: true, // Adiciona created_at e updated_at automaticamente
});

Product.belongsToMany(Category, { through: ProductCategory, foreignKey: 'product_id' });
Category.belongsToMany(Product, { through: ProductCategory, foreignKey: 'category_id' });

module.exports = ProductCategory;
