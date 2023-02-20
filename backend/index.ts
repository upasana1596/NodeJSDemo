import express from "express";
import bodyParser from "body-parser";
const app = express();
import dotenv from 'dotenv';

dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});