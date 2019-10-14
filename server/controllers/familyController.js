//This file is done by Qifan Tang
//It is for actions on family
//It include all functions for familiy
//Edit, add, delete etc.

//require database,api and schema
var db = require("../models/db.js");
var mongoose = require("mongoose");
var Family = mongoose.model("Family");

//add family member to database
module.exports.addFamily = function(req, res) {
    var family = new Family({
        name: req.body.name
        //bday: req.body.bday
    });

    family.save(function (err, family){
        if (!err) {
            res.send("successfully added family member");
        } else {
            console.log("failed to add family member");
            res.sendStatus(400);
        }
    });
};


//add family member to database
module.exports.addFamily2 = function(req, res) {
    var family = new Family({
        name: "name",
        bday: "2019-10-14"
    });

    family.save(function (err, family){
        if (!err) {
            //do sometihing
            console.log("successfully added family member");
        } else {
            console.log("failed to add family member");
            res.sendStatus(400);
        }
    });
};

//fetch all the family members
module.exports.getAllFamilys = function(req, res) {
    Family.find(function(err, families){
        if (!err) {
            //do sometihing
            res.send(families);
        } else {
            console.log("failed to get families");
            res.sendStatus(400);
        }
    });
};

//get a single member by id.
module.exports.getOneFamily = function(req, res) {
    Family.findOne({_id: req.params.id}, function(err, family){
        if (!err) {
            //do sometihing
            res.send(family);
        } else {
            console.log("failed to get family by id");
            res.sendStatus(400);
        }
    })
};

//edit an family member by id
module.exports.editFamily = function(req, res) {
    Family.findOne({_id: req.params.id}, function(err, family){
        if (!err) {
            //do sometihing
            res.send(family);
        } else {
            console.log("failed to get family by id");
            res.sendStatus(400);
        }
    })
};

//delete an family member
module.exports.deleteFamily = function(req, res) {
    Family.deleteOne({_id: req.params.id}, function(err){
        if (!err) {
            //do sometihing
            res.send("family member deleted");
        } else {
            console.log("failed to delete family by id");
            res.sendStatus(400);
        }
    })
};