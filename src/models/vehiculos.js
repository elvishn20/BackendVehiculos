const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vehiculos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    placa: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: "vehiculos_placa_key"
    },
    marca: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vehiculos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "vehiculos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "vehiculos_placa_key",
        unique: true,
        fields: [
          { name: "placa" },
        ]
      },
    ]
  });
};
