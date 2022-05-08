var DataTypes = require("sequelize").DataTypes;
var _product_master = require("./product_master");
var _product_material = require("./product_material");
var _product_material_type = require("./product_material_type");
var _series_master = require("./series_master");

function initModels(sequelize) {
  var product_master = _product_master(sequelize, DataTypes);
  var product_material = _product_material(sequelize, DataTypes);
  var product_material_type = _product_material_type(sequelize, DataTypes);
  var series_master = _series_master(sequelize, DataTypes);

  product_master.belongsTo(class_master, { as: "fk_class", foreignKey: "fk_class_id"});
  class_master.hasMany(product_master, { as: "product_masters", foreignKey: "fk_class_id"});
  product_material.belongsTo(product_master, { as: "fk_product", foreignKey: "fk_product_id"});
  product_master.hasMany(product_material, { as: "product_materials", foreignKey: "fk_product_id"});
  product_material.belongsTo(product_material_type, { as: "fk_material_type", foreignKey: "fk_material_type_id"});
  product_material_type.hasMany(product_material, { as: "product_materials", foreignKey: "fk_material_type_id"});
  product_master.belongsTo(series_master, { as: "fk_sery", foreignKey: "fk_series_id"});
  series_master.hasMany(product_master, { as: "product_masters", foreignKey: "fk_series_id"});
  product_master.belongsTo(subject_master, { as: "fk_subject", foreignKey: "fk_subject_id"});
  subject_master.hasMany(product_master, { as: "product_masters", foreignKey: "fk_subject_id"});
  product_master.belongsTo(users_master, { as: "created_by_users_master", foreignKey: "created_by"});
  users_master.hasMany(product_master, { as: "product_masters", foreignKey: "created_by"});
  product_material_type.belongsTo(users_master, { as: "created_by_users_master", foreignKey: "created_by"});
  users_master.hasMany(product_material_type, { as: "product_material_types", foreignKey: "created_by"});
  series_master.belongsTo(users_master, { as: "created_by_users_master", foreignKey: "created_by"});
  users_master.hasMany(series_master, { as: "series_masters", foreignKey: "created_by"});

  return {
    product_master,
    product_material,
    product_material_type,
    series_master,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
