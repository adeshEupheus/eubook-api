var DataTypes = require("sequelize").DataTypes;
var _orders_master = require("./orders_master");

function initModels(sequelize) {
  var orders_master = _orders_master(sequelize, DataTypes);

  orders_master.belongsTo(product_master, { as: "fk_product", foreignKey: "fk_product_id"});
  product_master.hasMany(orders_master, { as: "orders_masters", foreignKey: "fk_product_id"});
  orders_master.belongsTo(users_master, { as: "approve_by_users_master", foreignKey: "approve_by"});
  users_master.hasMany(orders_master, { as: "orders_masters", foreignKey: "approve_by"});
  orders_master.belongsTo(users_master, { as: "fk_user", foreignKey: "fk_users_id"});
  users_master.hasMany(orders_master, { as: "fk_users_orders_masters", foreignKey: "fk_users_id"});

  return {
    orders_master,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
