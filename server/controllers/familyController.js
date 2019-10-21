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
        name: req.body.name,
        bday: req.body.bday.toString()
    });

    family.save(function (err, family){
        if (!err) {
            res.status(200).json({"message":"family added"});
        } else {
            res.status(400).json({"message":"failed to add family"});
        }
    });
};

//fetch all the family members
module.exports.getAllFamilys = function(req, res) {
    Family.find(function(err, families){
        if (!err) {
            res.status(200).json(families);
        } else {
            res.status(400).json({"message":"failed to get families"});
        }
    });
};

//get a single member by id.
module.exports.getOneFamily = function(req, res) {
    Family.findOne({_id: req.params.id}, function(err, family){
        if (!err) {
            res.status(200).json(family);
        } else {
            res.status(400).json({"message":"failed to get family"});
        }
    })
};

//edit an family member by id
module.exports.editFamily = function(req, res) {
    Family.findOne({_id: req.params.id}, function(err, family){
        if (!err) {
            family.name = req.body.name;
            family.bday = req.body.bday;

            family.save(function (err, family){
                if (!err) {
                    res.status(200).json({"message":"family edited"});
                } else {
                    res.status(400).json({"message":"failed to edit family"});
                }
            });
        } else {
            res.status(400).json({"message":"failed to edit family"});
        }
    })
};

//delete an family member
module.exports.deleteFamily = function(req, res) {
    Family.deleteOne({_id: req.params.id}, function(err){
        if (!err) {
            res.status(200).json({"message":"family deleted"});
        } else {
            res.status(400).json({"message":"failed to delete family"});
        }
    })
};