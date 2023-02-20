"use strict";
module.exports = function (sequelize, DataTypes) {
  const categories = sequelize.define(
    "Categories",
    {
      name: DataTypes.STRING,
      recordStatus: { type: DataTypes.INTEGER, defaultValue: 0 },
      createdBy:DataTypes.INTEGER,
      updatedBy:DataTypes.INTEGER,
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
      tableName: "categories",
    }
  );
  return categories;
};
