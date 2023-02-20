"use strict";
const { userRole } = require("../helpers/constant");
module.exports = function (sequelize, DataTypes) {
  const users = sequelize.define(
    "Users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      recordStatus: { type: DataTypes.INTEGER, defaultValue: 0 },
      createdBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
      roleId: {
        type: DataTypes.INTEGER,
        defaultValue: userRole,
      },
      createdAt: {
        defaultValue: new Date(),
        type: DataTypes.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        type: DataTypes.DATE,
      },
    },
    {
      freezeTableName: true,
      tableName: "users",
    }
  );
  return users;
};
