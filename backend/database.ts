import { Sequelize } from 'sequelize-typescript';
export const sequelize = new Sequelize({
  database: 'nodejsdemo',
  dialect: 'postgres',
  username: 'postgres',
  password: 'password',
  storage: ':memory:',
  models: [__dirname + '/models'],
});

