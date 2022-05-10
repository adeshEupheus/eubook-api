const config = require("../../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.class_master = require("./class_master")(sequelize, Sequelize);
db.subject_master = require("./subject_master")(sequelize, Sequelize);


// db.subject_master.belongsTo(db.class_master, { as: "fk_class", foreignKey: "fk_class_id"});
// db.class_master.hasMany(db.subject_master, { as: "subject_masters", foreignKey: "fk_class_id"});
// db.class_master.belongsTo(db.users_master, { as: "created_by_users_master", foreignKey: "created_by"});
// db.users_master.hasMany(db.class_master, { as: "class_masters", foreignKey: "created_by"});
// db.subject_master.belongsTo(db.users_master, { as: "created_by_users_master", foreignKey: "created_by"});
// db.users_master.hasMany(db.subject_master, { as: "subject_masters", foreignKey: "created_by"});



module.exports = db;