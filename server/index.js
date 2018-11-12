require("dotenv").config();
const express = require("express");
const massive = require('massive')

const { SERVER_PORT, MASSIVE_CONNECTION } = process.env;

const app = express();

app.use(express.json());

massive(MASSIVE_CONNECTION).then(db => {
    app.set('db', db);
    console.log('db is conected')
}) 


app.get('/api/test', (req, res) => {
    req.get('db').user.getuser()
})








app.listen(SERVER_PORT, () =>
  console.log(`Eavesdropping on SERVER_PORT ${SERVER_PORT}`)
);
