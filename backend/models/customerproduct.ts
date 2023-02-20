"use strict";
module.exports = function (sequelize, DataTypes) {
  const customerproduct = sequelize.define(
    "CustomerProduct",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      recordStatus: { type: DataTypes.INTEGER, defaultValue: 0 },
      createdBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
      productId: {
        type: DataTypes.INTEGER,
      },
      customerId: {
        type: DataTypes.INTEGER,
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
      tableName: "customerproduct",
    }
  );
  customerproduct.associate = models => {
    customerproduct.belongsTo(models.Products, {
      foreignKey: 'productId'
    });
    customerproduct.belongsTo(models.Users, {
      foreignKey: 'customerId'
    });
  }
  return customerproduct;
};
