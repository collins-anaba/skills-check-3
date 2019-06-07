require("dotenv").config();
const massive = require("massive");
const express = require("express");

const app = express();
app.use(express.json());

massive(CONNECTION_STRING)


const PORT = 4001
const server = app.listen(PORT, () =>
  console.log('listening on port 4000')
);