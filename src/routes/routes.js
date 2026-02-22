const { Router } = require('express');
const Controllers = require('../controllers/controllers');

const router = Router();

// Ruta de prueba
router.get('/', (req, res) => {
    res.send(`<h1>Inicio de prueba tecnica</h1>`);
});

// Ruta para crear vehiculo
router.post('/insertar-vehiculo', Controllers.insertarVehiculo);

// Ruta para traer vehiculos
router.get('/lista-vehiculos', Controllers.listaVehiculos);

// Ruta para actualizar vehiculos
router.put('/editar-vehiculo', Controllers.editarVehiculo);

// Ruta para eliminar vehiculos
router.delete('/eliminar-vehiculo/:idVehiculo', Controllers.eliminarVehiculo);

module.exports = router;

