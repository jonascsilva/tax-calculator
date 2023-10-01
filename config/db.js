import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres', 
  database: process.env.DB_NAME, 
  username: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  host: process.env.DB_HOST, 
  port: 5432, 
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
