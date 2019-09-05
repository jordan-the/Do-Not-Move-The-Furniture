const db = require('../models/db');
const mongoose = require('mongoose');


//import the database
const User = mongoose.model('User');


//coming soon page
module.exports.coming = function(req,res){
    res.render('coming');
};