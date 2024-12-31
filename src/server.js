const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rotas de Usuários
app.use('/v1/user', userRoutes);

// Rotas de Produtos
app.use('/v1/product', productRoutes);

// Rotas de Categorias
app.use('/v1/category', categoryRoutes);

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(error => {
  console.error('Error syncing database:', error);
});
