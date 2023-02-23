import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import {sequelize} from "./database";
import router from './routes'
const app = express();
sequelize.sync();

dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)

// set port, listen for requests
const PORT = process.env.DB_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});