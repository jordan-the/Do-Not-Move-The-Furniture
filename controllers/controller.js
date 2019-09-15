//This file is done by Qifan Tang
//It is for overall controller interact with the pages

//import database and api
const db = require("../models/db.js");
const mongoose = require("mongoose");

//import individual controllers
const ac = require("../controllers/artifactController.js");
const cc = require("../controllers/categoryController.js");
const fc = require("../controllers/familyController.js");

//coming soon page
module.exports.coming = function(req,res){
    res.render("coming");
};