import { Sequelize } from 'sequelize-typescript';
require('dotenv').config();

const db = process.env.DB_DATABASE;
const dbusername = process.env.DB_USERNAME;
const dbpassword = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;

export const sequelize = new Sequelize({
  username: dbusername,
  password: dbpassword,
  database: db,
  host: dbhost,
  // storage: ':memory:',
  models: [__dirname + '/models'],
  dialect: 'postgres',

});

