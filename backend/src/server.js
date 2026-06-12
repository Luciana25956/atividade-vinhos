require('dotenv').config();
const express = require('express'); 
const { sequelize, connectDatabase } = require('./config/database');
const app = express(); 
const PORT = process.env.PORT || 3000;
// ... (resto do seu código de rotas e middlewares)

async function startServer() {
  try {
    
    await connectDatabase();
    
    //Tabelas sincronizadas//
    await sequelize.sync({ alter: true });
    console.log('Tabelas sincronizadas!');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error.message);
    process.exit(1);
  }
}

startServer();