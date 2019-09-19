//This file is done by Qifan Tang
//It is for overall controller interact with the pages

//import database and api
var db = require("../models/db.js");
var mongoose = require("mongoose");

//import individual controllers
var ac = require("../controllers/artifactController.js");
var cc = require("../controllers/categoryController.js");
var fc = require("../controllers/familyController.js");

//coming soon page
module.exports.coming = function(req,res){
    res.render("coming");
};

