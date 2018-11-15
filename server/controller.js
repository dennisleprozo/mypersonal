const bcrypt = require("bcryptjs");

module.exports = {
    async signup(req, res) {
        /*
            1. check db for existing email
                a. if exists, send error message
            2. generate salt and hash
            3. insert into db
            4. put user data on session
            5. send back 200 w/ with data
        */
        let db = req.app.get("db");
        let { username, userpassword } = req.body;

        let foundUser = await db.customer.find_user([username]);
        if (foundUser[0])
            return res.status(200).send({ message: "User Name already in use" });
// else
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(userpassword, salt);

        let [createdUser] = await db.customer.create_customer([username, hash]);
// created session and passed the new user to user_name in the db
        req.session.user = {username: createdUser.user_name};

        res.status(200).send({ message: "loggedIn" });


        // async signup(req, res) {
        //     let { first_name, last_name, password, user_name, address } = req.body;
        //     let db = req.app.get('db')

        //     let [foundUser] = await db.find_profile(email);
        //     if (foundUser) return res.status(200).send({ message: 'User Name already in use' })
        //     let salt = bcrypt.genSaltSync(10);
        //     let hash = bcrypt.hashSync(password, salt)
        //     console.log(hash.length)
        //     let [createUser] = await db.create_user([name, hash, email, bio, image])
        //     req.session.user = {
        //         id: createUser.profile_id,
        //         name: createUser.name,
        //         email: createUser.profile_email,
        //         bio: createUser.profile_bio,
        //         image: createUser.profile_image
        //     }
        //     res.status(200).send({message: 'Logged in.'})













    },


    async login(req, res) {
        /*
            1. check to make a user has the email from req.body
            a. if not, the send back proper message
            2. compare the password using compareSync
            a. if incorrect, send proper message
            3. put logged in user on req.session
            4. send proper status
            */
        let db = req.app.get("db");
        let { username, userpassword } = req.body;

        let [foundUser] = await db.customer.find_user([username]);
        if (foundUser) {
// compareSync userpassword from passowrd db returns either true or false
            let result = bcrypt.compareSync(userpassword, foundUser.password);
            if (result) {
                req.session.user = {username: foundUser.user_name};
                res.status(200).send({ message: "loggedIn" });
            } else {
                res.status(401).send({ message: "Unauthorized: Incorrect Password " });
            }
            } else {
            res.status(401).send({ message: "User Name not found." });
            }
    },

    userData(req, res) {
        if (req.session.user) {
            res.status(200).send(req.session.user);
        } else {
            res.sendStatus(401);
        }
    },

    logout(req, res) {
        req.session.destroy();
        res.redirect('http://localhost:4040')
    }
};
