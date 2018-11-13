require("dotenv").config();
const express = require("express");
const massive = require('massive');
const session = require('express-session');
const bodyParser = require("body-parser");
const controller = require('./controller');

const app = express();
app.use(express.json());

const { SERVER_PORT, MASSIVE_CONNECTION, SESSION_SECRET } = process.env;

massive(MASSIVE_CONNECTION).then(db => {
    app.set('db', db);
    console.log('db is connected')
}) 

app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: SESSION_SECRET
    })
);

app.post('/auth/signup', controller.signup)
app.post('/auth/login', controller.login);

app.get('/api/user-data', controller.userData);
app.get('/auth/logout', controller.logout);


app.get('/api/test', (req, res) => {
    req.get('db').user.getuser()
})








app.listen(SERVER_PORT, () =>
  console.log(`Eavesdropping on SERVER_PORT ${SERVER_PORT}`)
);
