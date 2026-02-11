const express = require('express')

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`<h1>Inicio de prueba tecnica</h1>`);
});

app.listen(PORT, () => {
    console.log(`Aplicacion funcional ${PORT}`)
})