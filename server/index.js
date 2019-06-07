require("dotenv").config();
const massive = require("massive");
const express = require("express");
const {getHouses, postHouse, Delete} = require("./controller")


const app = express();
app.use(express.json());
const { CONNECTION_STRING, SESSION_SECRET } = process.env

massive(CONNECTION_STRING).then((db) => {
  app.set('db', db);
  console.log('db connected')
})
app.post('/api/houses/',getHouses);
app.get('/api/houses/:id',postHouse);
app.delete('/api/house/',Delete);

const PORT = 4001
app.listen(PORT, () => console.log(`listening on port ${PORT}`))