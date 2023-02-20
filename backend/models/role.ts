"use strict";
module.exports = function (sequelize, DataTypes) {
  const roles = sequelize.define(
    "Roles",
    {
      name: DataTypes.STRING,
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
      tableName: "roles",
    }
  );
  return roles;
};
