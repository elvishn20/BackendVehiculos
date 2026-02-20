const db = require('../config/db');

// Logica para la insercion del vehiculo
insertarVehiculo = async (req, res) => {
    try {
        const {
            pr_placa,
            pr_marca,
            pr_modelo
        } = req.body;

        const queryResult = await db.query(
            'CALL public.crear_vehiculo($1, $2, $3, $4, $5)',
            [
                pr_placa,
                pr_marca,
                pr_modelo,
                null,
                null
            ],
        );

        const {resultado, mensaje} = queryResult.rows[0];
        if (resultado === 1) {
            res.status(200).json({message: mensaje});
        } else {
            res.status(400).json({message: mensaje});
        };
    } catch (error) {
        console.error('Error detallado:', error);
        res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message
        });
    };
};

// Logica para traer la lista de vehiculos
const listaVehiculos = async (req, res) => {
    try {
        const queryResult = await db.query(
            'SELECT * FROM public.traer_vehiculos()'
        );
        res.status(200).json({success: true, data: queryResult.rows})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    };
};

module.exports = {
    insertarVehiculo,
    listaVehiculos,
}