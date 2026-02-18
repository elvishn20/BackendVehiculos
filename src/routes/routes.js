const { Router } = require('express');

const router = Router();

// Ruta de prueba
router.get('/', (req, res) => {
    res.send(`<h1>Inicio de prueba tecnica</h1>`);
});

module.exports = router;

