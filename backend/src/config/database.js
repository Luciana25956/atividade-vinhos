const { Sequelize } = require('sequelize');

// Cria a instância do Sequelize configurada com as credenciais do seu .env
const sequelize = new Sequelize(process.env.MYSQL_URI, {
  dialect: 'mysql',
  logging: false, // Define como true se quiser ver os comandos SQL no terminal
});

// Criamos uma função simples apenas para testar a conexão no início
async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('MySQL conectado com sucesso através do Sequelize!');
  } catch (error) {
    console.error('Erro ao conectar no MySQL:', error.message);
    process.exit(1);
  }
}

// Exportamos tanto a função de teste quanto a instância que o modelo precisa
module.exports = { sequelize, connectDatabase };