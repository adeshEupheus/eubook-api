var DataTypes = require("sequelize").DataTypes;
var _class_master = require("./class_master");
var _subject_master = require("./subject_master");

function initModels(sequelize) {
  var class_master = _class_master(sequelize, DataTypes);
  var subject_master = _subject_master(sequelize, DataTypes);

  subject_master.belongsTo(class_master, { as: "fk_class", foreignKey: "fk_class_id"});
  class_master.hasMany(subject_master, { as: "subject_masters", foreignKey: "fk_class_id"});
  class_master.belongsTo(users_master, { as: "created_by_users_master", foreignKey: "created_by"});
  users_master.hasMany(class_master, { as: "class_masters", foreignKey: "created_by"});
  subject_master.belongsTo(users_master, { as: "created_by_users_master", foreignKey: "created_by"});
  users_master.hasMany(subject_master, { as: "subject_masters", foreignKey: "created_by"});

  return {
    class_master,
    subject_master,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
