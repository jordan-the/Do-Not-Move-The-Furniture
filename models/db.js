// Create Database
const mongoose = require('mongoose');

mongoose.connect('mongodb://mike:miketang@ds115340.mlab.com:15340/qifandb', function(err){
    if(!err) {
        console.log('Connected to mongo');
    } else {
        console.log('Failed to connect to mongo');
    }
});

//require the schemas
require('./user.js');
