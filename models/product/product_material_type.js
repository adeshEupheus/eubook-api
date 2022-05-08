const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_material_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "product_material_type_name_unique"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users_master',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_material_type',
    schema: 'product',
    timestamps: false,
    indexes: [
      {
        name: "product_material_type_name_index",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "product_material_type_name_unique",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "product_material_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
