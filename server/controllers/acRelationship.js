//This file is done by Qifan Tang
//It is for actions on artifact category relationship
//include edit, add, get, delete relationship

//import database
var db = require("../models/db.js");
var mongoose = require("mongoose");
var ACR = mongoose.model("acRelationship");

//add relationship to database
module.exports.addRelationship = function(req, res) {
    var acr = new ACR({
        artifactId: req.body.artifactId,
        categoryId: req.body.categoryId
    });

    acr.save(function (err, acr){
        if (!err) {
            res.status(200).json({"message":"relationship added"});
        } else {
            res.status(400).json({"message":"failed to add relationship"});
        }
    });
};

//fetch all the relationships
module.exports.getRelationship = function(req, res) {
    ACR.find(function(err, relations){
        if (!err) {
            res.status(200).json(relations);
        } else {
            res.status(400).json({"message":"failed to get all relations"});
        }
    });
};

//get a single relationship by id.
module.exports.getRelationById = function(req, res) {
    ACR.findOne({_id: req.params.id}, function(err, relation){
        if (!err) {
            res.status(200).json(relation);
        } else {
            res.status(400).json({"message":"failed to get relation by id"});
        }
    })
};

//get relations by artifact.
module.exports.getRelationByArtifact = function(req, res) {
    ACR.find({artifactId: req.body.artifactId}, function(err, relations){
        if (!err) {
            res.status(200).json(relations);
        } else {
            res.status(400).json({"message":"failed to get relations by atifact"});
        }
    })
};

//get relations by category.
module.exports.getRelationByCategory = function(req, res) {
    ACR.find({categoryId: req.body.categoryId}, function(err, relations){
        if (!err) {
            res.status(200).json(relations);
        } else {
            res.status(400).json({"message":"failed to get relations by category"});
        }
    })
};

//delete an family member
module.exports.deleteRelation = function(req, res) {
    ACR.deleteOne({_id: req.params.id}, function(err){
        if (!err) {
            res.status(200).json({"message":"relationship deleted"});
        } else {
            res.status(400).json({"message":"failed to delete relationship"});
        }
    })
};

module.exports.deleteRelationByArtifact = function(req, res){
    console.log("delete by artifact");
    ACR.deleteMany({artifactId: req.params.id}, function(err){
        if(err){
            console.log(err);
            res.status(400).json({"message": "failed to delete relation by artifact"});
        }else{
            console.log("successfully deleted relations");
        }
    });
};