const db = require('../config/db');

// Logica para la insercion del vehiculo
const insertarVehiculo = async (req, res) => {
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
            res.status(200).json({success: true, message: mensaje});
        } else {
            res.status(400).json({success: false, message: mensaje});
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

// Logica para actualizar el vehiculo
const editarVehiculo = async (req, res) => {
    try {
        const {
            pr_id,
            pr_placa,
            pr_marca,
            pr_modelo
        } = req.body;

        const queryResult = await db.query(
            'CALL public.actualizar_vehiculo($1, $2, $3, $4, $5, $6)',
            [
                pr_id,
                pr_placa,
                pr_marca,
                pr_modelo,
                null,
                null
            ],
        );

        const {resultado, mensaje} = queryResult.rows[0];
        if (resultado === 1) {
            res.status(200).json({success: true, message: mensaje});
        } else {
            res.status(400).json({success: false, message: mensaje});
        }
    } catch (error) {
        console.error('Error detallado: ', error);
        res.status(500).json({
            message: 'Error interno del servidor:',
            error: error.message
        });
    };
};

// Logica para eliminar vehiculo
const eliminarVehiculo = async (req, res) => {
    try {
        const {idVehiculo} = req.params

        const queryResult = await db.query(
            'CALL public.borrar_vehiculo($1, $2, $3)',
            [
                idVehiculo,
                null,
                null
            ],
        );
        
        const {resultado, mensaje} = queryResult.rows[0];
        if (resultado === 1) {
            res.status(200).json({success: true, message: mensaje});
        } else {
            res.status(400).json({success: false, message: mensaje});
        }
    } catch (error) {
        console.error('Error detallado: ', error)
        res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message
        })
    }

}

// Logica para crear entrada o salida
const insertarMovimiento = async (req, res) => {
    try {
        const {
            pr_id_vehiculo,
            pr_tipo_movimiento,
            pr_nombre_motorista,
            pr_fecha,
            pr_hora,
            pr_kilometraje
        } = req.body

        const queryResult = await db.query(
            'CALL public.crear_movimiento ($1, $2, $3, $4, $5, $6, $7, $8)',
            [
                pr_id_vehiculo,
                pr_tipo_movimiento,
                pr_nombre_motorista,
                pr_fecha,
                pr_hora,
                pr_kilometraje,
                null,
                null
            ],
        );
        const {resultado, mensaje} = queryResult.rows[0];
        if (resultado === 1) {
            res.status(200).json({success: true, message: mensaje});
        } else {
            res.status(400).json({success: false, message: mensaje});
        }
    } catch (error) {
        console.error('Error detallado: ', error);
        res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message
        })
    }
}

module.exports = {
    insertarVehiculo,
    listaVehiculos,
    editarVehiculo,
    eliminarVehiculo,
    insertarMovimiento
}