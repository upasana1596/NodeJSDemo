"use strict";
module.exports = function (sequelize, DataTypes) {
  const products = sequelize.define(
    "Products",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
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
      tableName: "products",
    }
  );
  products.associate = function (models) {
    products.belongsTo(models.Categories, {
      foreignKey: "categoryId",
      as:"category"
    });
  };
  return products;
};
