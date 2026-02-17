const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Inicio de prueba tecnica</h1>`);
});

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