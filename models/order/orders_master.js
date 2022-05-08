const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders_master', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fk_product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'product_master',
        key: 'id'
      }
    },
    fk_users_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users_master',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    approve_by: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users_master',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'orders_master',
    schema: 'orders',
    timestamps: true,
    indexes: [
      {
        name: "orders_master_fk_users_id_index",
        fields: [
          { name: "fk_users_id" },
        ]
      },
      {
        name: "orders_master_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
