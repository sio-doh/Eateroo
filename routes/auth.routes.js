const express = require("express"); 
const bcrypt = require("bcryptjs"); 
const jwt =require("jsonwebtoken"); 
const User = require("../models/User.model"); 
const router = express.Router(); 
const { isAuthenticated } = require("./../middleware/jwt.middleware");
const saltRounds = 10; 

// POST /auth/signup 
// Creates a new user in the database
router.post('/signup', (req, res, next) => {
    const { email, password, name } = req.body; 

    // check if email or password or name are provided as empty string 
    if (email === '' || password === '' || name === '') {
        res.status(400).json({ message: "Provided email, pasword and name" });
        return;
    }

    // use regex to validate email format 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 
    if (!emailRegex.test(email)) {
        res.status(400).json({ message: "Provide a valid email address." }); 
        return;
    }

    // use regex to validate password format 
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; 
    if (!passwordRegex.test(password)) {
        res.status(400).json({ message: "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter." }); 
        return; 
    }

    // Check users collection if a user with the same email already exists 
    User.findOne({ email })
    .then((foundUser) => {
        // if user with same email already exists, send an error response 
        if (foundUser) {
            res.status(400).json({ message: "User already exists." }); 
            return; 
        }

        // if email is unique, proceed to hash the password 
        const salt = bcrypt.genSaltSync(saltRounds); 
        const hashedPassword = bcrypt.hashSync(password, salt); 

        // create new user in database 
        // return pending promise allowing to chain another 'then' 
        return User.create({ email, password: hashedPassword, name }); 
    })
    .then((createdUser) => {
        // deconstruct newly created user object to omit the password 
        // do not expose passwords publicly  
        const { email, name, _id } = createdUser; 

        // create a new object that does not expose the password 
        const user = { email, name, _id }; 
        
        // send a json response containing user object 
        res.status(201).json({ user: user }); 
    })
    .catch(err => {
        console.log(err); 
        res.status(500).json({ message: "Internal Server Error" });
    }); 
});


// POST /auth/login 
// Verifies email and password and returns a JWT 
router.post('/login', (req, res, next) => {
    console.log("received login request. is this executed?????")
    const { email, password } = req.body;

    // check if email or password provided are as empty strings 
    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." }); 
        return; 
    } 

    // check users collection if a user with same email exists 
    User.findOne({ email })
    .then((foundUser) => {
        if (!foundUser) {
            console.log("did not find user")
            // if user is not found, send an error response 
            res.status(401).json({ message: "User not found." }); 
            return;
        }

        // compare provided password with one saved in database 
        const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

        if (passwordCorrect) {
            // deconstruct user object to omit the password 
            const { _id, email, name } = foundUser; 

            // create an object that will be set as token payload
            const payload = { _id, email, name }; 

            // create and sign token 
            const authToken = jwt.sign(
                payload, 
                process.env.TOKEN_SECRET, 
                { algorithm: "HS256", expiresIn: "6h" }
            ); 

            // send token as response 
            res.status(200).json({ authToken: authToken });
        } 
        else { 
            console.log("user here")
            res.status(401).json({ message: "Unable to authenticate the user." }); 
        }

    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});

// GET /auth/verify 
// used to verify JWT stored on the client 
router.get('/verify', isAuthenticated, (req, res, next) => {
    // if JWT token is valid, payload gets decoded by 
    // isAuthenticated middleware and made available on 'req.payload' 
    console.log('req.payload', req.payload);

    // send back object with user data, set prior as token payload 
    res.status(200).json(req.payload);
}); 

module.exports = router; 