const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_master', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "users_master_email_unique"
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "users_master_phone_unique"
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
    
  }, {
    underscored: true,
    sequelize,
    tableName: 'users_master',
    schema: 'users',
    timestamps: false,
    indexes: [
      {
        name: "users_master_email_unique",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "users_master_phone_unique",
        unique: true,
        fields: [
          { name: "phone" },
        ]
      },
      {
        name: "users_master_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
