const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_material', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fk_product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'product_master',
        key: 'id'
      }
    },
    fk_material_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'product_material_type',
        key: 'id'
      }
    },
    product_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    prduct_thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'product_material',
    schema: 'product',
    timestamps: true,
    indexes: [
      {
        name: "product_material_name_index",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "product_material_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
