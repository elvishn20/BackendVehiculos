const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Movimientos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idVehiculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vehiculos',
        key: 'id'
      },
      field: 'id_vehiculo'
    },
    tipoMovimiento: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'tipo_movimiento'
    },
    nombreMotorista: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'nombre_motorista'
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    kilometraje: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movimientos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "movimientos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
