var DataTypes = require("sequelize").DataTypes;
var _Movimientos = require("./movimientos");
var _Vehiculos = require("./vehiculos");

function initModels(sequelize) {
  var Movimientos = _Movimientos(sequelize, DataTypes);
  var Vehiculos = _Vehiculos(sequelize, DataTypes);

  Movimientos.belongsTo(Vehiculos, { as: "vehiculo", foreignKey: "idVehiculo"});
  Vehiculos.hasMany(Movimientos, { as: "movimientos", foreignKey: "idVehiculo"});

  return {
    Movimientos,
    Vehiculos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
