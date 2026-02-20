const { Pool } = require('pg');
require('dotenv').config();

// Conexion con la base de datos
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.on('connect', () => {
    console.log('Conexion a Postgres en el puerto 5432');
});

pool.on('error', (err) => {
    console.error('Error en la conexion con Postgres', err);
    process.exit(-1);
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};