require("dotenv").config();
const express = require("express");
const session = require('express-session');
const massive = require('massive');
const controller = require('./controller');
const stripectrl = require('./stripectrl');


const axios = require('axios');

// app using express
const app = express();

app.use(express.json());

// destruct process.env
const { SERVER_PORT, MASSIVE_CONNECTION, SESSION_SECRET,
        REACT_APP_CLIENT_ID, REACT_APP_DOMAIN,
        CLIENT_SECRET, NODE_ENV, AUTH0_PROTOCOL } = process.env;

massive(MASSIVE_CONNECTION).then(db => {
    app.set('db', db);
    console.log('DB is set...')
}) 

// middleware session 
app.use(session({
        resave: false,
        saveUninitialized: false,
        secret: SESSION_SECRET
    })
);

app.use(async (req, res, next) => {
    if(NODE_ENV === 'dev') {
        const user = await req.app.get('db').find_user(['google-oauth2|111689734529128927950']);
        req.session.user = user[0];
    }
    next();
});

app.use( express.static( `${__dirname}/../build` ) );


// get auth0  endpoint
app.get('/auth/callback', async (req, res) =>{
    // uses code from req in payload for a token
    // console.log('test string')
    try {
    // try catch error 
    
    const payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET, 
        code: req.query.code,
        grant_type: 'authorization_code',
        //auth reply to callback
        redirect_uri: `${AUTH0_PROTOCOL}://${req.headers.host}/auth/callback`
    }
        
    // waiting...
        
    // posts code in payload, wait for token
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    // response with token

    // fetch token with access 
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)

    // response with user data

    let { email, name, picture, sub } = resWithUserData.data;

    // find user ? loggedIn : createUser
    let db = req.app.get('db')
    let foundUser = await req.app.get('db').find_user([sub])
    // exists? set user session
        if (foundUser[0]) {
            req.session.user = foundUser[0];
            res.redirect('/#/')
        } else {
            let createdUser = await db.create_user([name, email, picture, sub])
            req.session.user = createdUser[0];
            res.redirect('/#/')
        }
    
    } catch(err) {
        console.log('error handling in progress', err);
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
    
    // Check for signed in? 200 : NOOOOO
    app.get('/api/user-data', envCheck, (req, res) => {
        if (req.session.user) {
        res.status(200).send(req.session.user);
        } else {
        res.status(401).send("NOOOO!")
        }
    })
    
    //Logout destroys session and redirect to any url
    app.get('/auth/logout', (req, res) => {
        req.session.destroy();
        res.redirect('https://dennisleprozo.com/')
    })




//-- products endpoints --//
app.get('/api/getAll', controller.read);

//-- addToCart items endpoints
app.post('/api/cart/:prodId', controller.addToCart);



//-- Stripe endpoint
app.post('/api/payment', stripectrl.handlePayment);

// -- Total endpoint
app.get('/api/getTotal', controller.getTotal);

// -- Cart endpoints
app.get('/api/getCart', controller.getCart); 



// -- delete item
app.delete('/api/removeFromCart/:cartId', controller.removeFromCart)

// -- delete all items in cart upon stripe checkout
app.delete('/api/empty_cart', controller.emptyCart);


// -- delete quantity of item
app.delete('/api/decreaseCart/:cartId/:quantity', controller.decreaseQuantity)
// -- add quantity updates the state
app.put('/api/increaseCart/:cartId/:quantity', controller.increaseQuantity)

app.listen(SERVER_PORT, () =>
    console.log(`Eavesdropping on SERVER_PORT ${SERVER_PORT}...`)
);
