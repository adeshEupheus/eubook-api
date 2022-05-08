var DataTypes = require("sequelize").DataTypes;
var _users_master = require("./users_master");

function initModels(sequelize) {
  var users_master = _users_master(sequelize, DataTypes);


  return {
    users_master,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
