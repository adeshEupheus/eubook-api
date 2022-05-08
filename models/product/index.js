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
db.product_master = require('./product_master')(sequelize, Sequelize);
db.series_master = require('./series_master')(sequelize, Sequelize);
db.product_material_type = require('./product_material_type')(sequelize, Sequelize);
db.product_material = require('./product_material')(sequelize, Sequelize);


module.exports = db;