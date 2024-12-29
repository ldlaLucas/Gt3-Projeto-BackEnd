const express = require('express');
const app = express();

app.use(express.json());  // Middleware para analisar JSON

// Rotas de usuários
app.use('/api/users', require('./routes/users'));

// Rotas de categorias
app.use('/api/categories', require('./routes/categories'));

// Rotas de produtos
app.use('/api/products', require('./routes/products'));

app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

module.exports = app;
