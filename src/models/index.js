const Sequelize = require('sequelize');
const initModels = require('./init-models');

// Configuramos la conexión usando tus variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false, 
  }
);

// Inicializamos los modelos
const models = initModels(sequelize);

// Exportamos sequelize (para SQL puro) y los modelos (para el estilo ORM)
module.exports = {
  ...models,
  sequelize
};