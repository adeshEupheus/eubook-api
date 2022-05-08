const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('class_master', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "class_master_name_unique"
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
    tableName: 'class_master',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "class_master_name_index",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "class_master_name_unique",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "class_master_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
