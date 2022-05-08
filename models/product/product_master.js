const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_master', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fk_class_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'class_master',
        key: 'id'
      }
    },
    fk_subject_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'subject_master',
        key: 'id'
      }
    },
    fk_series_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'series_master',
        key: 'id'
      }
    },
    image: {
      type: DataTypes.STRING(255),
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
    tableName: 'product_master',
    schema: 'product',
    timestamps: false,
    indexes: [
      {
        name: "product_master_fk_subject_id_index",
        fields: [
          { name: "fk_subject_id" },
        ]
      },
      {
        name: "product_master_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
