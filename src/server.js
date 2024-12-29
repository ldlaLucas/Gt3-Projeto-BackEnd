const app = require('./app');
const sequelize = require('./config/database');
const PORT = process.env.PORT || 3000;

// Sincroniza o banco de dados e inicia o servidor
sequelize.sync().then(() => {  // Usar alter: true para aplicar mudanças no modelo
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
