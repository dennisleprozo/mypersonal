require("dotenv").config();
const express = require("express");
const session = require('express-session');
const massive = require('massive');
const bodyParser = require("body-parser");
const controller = require('./controller');

const axios = require('axios');

// app using express
const app = express();
app.use(express.json());

// dest process.env
const { SERVER_PORT, MASSIVE_CONNECTION, SESSION_SECRET,
        REACT_APP_CLIENT_ID, REACT_APP_DOMAIN,
        CLIENT_SECRET, NODE_ENV } = process.env;

massive(MASSIVE_CONNECTION).then(db => {
    app.set('db', db);
    console.log('massive db is set')
}) 

// middleware session 
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: SESSION_SECRET
    })
);

// get auth endpoint
app.get('/auth/callback', async (req, res) =>{
    // uses code from req in payload for a token
    const payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET, 
        code: req.query.code,
        grant_type: 'authorization_code',
        //auth reply to callback
        redirect_uri: `https://${req.headers.host}/auth/callback`  
    }


// waiting...


    // sends code, wait for token
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)

    // response with token
    console.log(resWithToken.data);

    // fetch token with access 
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)

    // response with user data
    console.log('user data', resWithUserData);

    let { email, name, picture, sub } = resWithUserData.data;

    // find user ? loggedIn : createUser
    let db = req.app.get('db')
    let foundUser = await req.app.get('db').find_user([sub])
        if (foundUser[0]) {
            req.session.user = foundUser[0];
            res.redirect('/#/dashboard')
        } else {
            let createdUser = await db.create_user([name, email, picture, sub])
            req.session.user = createdUser[0];
            res.redirect('/#/dashboard')
        }
})

function envCheck(req, res, next) {
    if (NODE_ENV === 'dev') {
        req.app.get('db').get_user_by_id().then(userWithIdOne => {
            req.session.user = userWithIdOne[0]
            next();
        })
        } else {
        next()
        }
    }
    
    app.get('/api/user-data', envCheck, (req, res) => {
        if (req.session.user) {
        res.status(200).send(req.session.user);
        } else {
        res.status(401).send("NOOOO!")
        }
    })
    
    app.get('/auth/logout', (req, res) => {
        req.session.destroy();
        res.redirect('http://localhost:3000/')
    })







app.listen(SERVER_PORT, () =>
    console.log(`Eavesdropping on SERVER_PORT ${SERVER_PORT}`)
);