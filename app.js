// require express
const express = require('express');
const app = express();

//require routes
const router = require('./routes/routes');

//require bodyparser
const bodyParser = require('body-parser');

//set port number
const PORT = process.env.PORT || 3000;

//require passport
const passport = require('passport');

//requuire passport-local
const LocalStrategy = require('passport-local').Strategy;

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//require('./models/db.js');

// Set the view engine
app.set('view engine','ejs');

//set the dir
app.use(express.static(__dirname));

// require express-session
app.use(require('express-session')({
    secret: 'work hard',
    resave: false,
    saveUninitialized: false
}));

//initialize passport
app.use(passport.initialize());

//passport session
app.use(passport.session());

//use router
app.use('/',router);

const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Start the app at the Port point
app.listen(PORT,function(){
    console.log(`Express listening on port ${PORT}`);
});
