const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const routes = require('./routes/routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use('/', routes)

// Prueba de conexion
app.listen(PORT, () => {
    console.log(`Aplicacion funcional ${PORT}`);

    db.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.error('Error en la conexion a Postgres:', err.message);
        } else {
            console.log('Base de datos conectada');
        }
    });
})