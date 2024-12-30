const sequelize = require('./config/database');
const User = require('./models/User');
const Category = require('./models/Category');
const Product = require('./models/Product');
const ProductImage = require('./models/ProductImage');
const ProductOption = require('./models/ProductOption');
const ProductCategory = require('./models/ProductCategory');

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
}).catch(error => {
  console.error('Error creating database & tables:', error);
});
