const { Sequelize } = require('sequelize');
require('dotenv').config();  // Carrega variáveis de ambiente do arquivo .env

// Configura a conexão com o banco de dados usando variáveis de ambiente
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',  // Usando o MySQL como banco de dados
});

module.exports = sequelize;
