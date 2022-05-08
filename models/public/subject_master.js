const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subject_master', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fk_class_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'class_master',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "subject_master_name_unique"
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
    tableName: 'subject_master',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "subject_master_fk_class_id_index",
        fields: [
          { name: "fk_class_id" },
        ]
      },
      {
        name: "subject_master_name_unique",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "subject_master_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
