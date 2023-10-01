import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres', // Especifica o dialeto como PostgreSQL
  database: 'nome_do_banco_de_dados', // Substitua pelo nome do seu banco de dados
  username: 'seu_usuario', // Substitua pelo seu nome de usuário
  password: 'sua_senha', // Substitua pela sua senha
  host: 'localhost', // Substitua pelo host do seu banco de dados
  port: 5432, // Porta padrão do PostgreSQL
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados PostgreSQL bem-sucedida.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados PostgreSQL:', error);
  });

export default sequelize;
