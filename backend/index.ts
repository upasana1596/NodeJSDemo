import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
const db = require('./models')
const app = express();
db.models.sequelize.sync({force: true});

dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.DB_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});