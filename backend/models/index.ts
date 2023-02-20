require("dotenv").config();
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV;
const config = require("../config/database")[env];
const Users = require("./user");
const Roles = require("./role");
const Categories = require("./categories");
const Products = require("./product");
const CustomerProduct = require("./customerproduct");

let models: any = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Op = Sequelize.Op;
[Users, Roles, Categories, Products,CustomerProduct].forEach((modelCreator) => {
  const model = modelCreator(sequelize, Sequelize.DataTypes);
  models[model.name] = model;
});
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
module.exports = { models, Op };
