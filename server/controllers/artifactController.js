//This file is done by Qifan Tang
//It is for actions on artifacts
//include edit, add, get, delete artifacts and images.

//import database
var db = require("../models/db.js");
var mongoose = require("mongoose");
var Artifact = mongoose.model("Artifact");

//add artifact to database
module.exports.addArtifact = function(req, res) {
    var artifact = new Artifact({
        name: req.body.name,
        description: req.body.description,
        year : req.body.year,
        month: req.body.month,
        day: req.body.day,
        currentLocation: req.body.currentLocation,
        originLocation: req.body.originLocation,
        familyId: req.body.familyId,
        category: req.body.category
    });

    artifact.save(function (err, artifact){
        if (!err) {
            res.status(200).json({"message":"successfully added artifact", "artifactId": artifact._id});
        } else {
            res.status(400).json({"message":"failed to add artifact"});
        }
    });
};

//fetch all the artifacts
module.exports.getAllArtifacts = function(req, res) {
    Artifact.find(function(err, artifacts){
        if (!err) {
            res.status(200).json(artifacts);
        } else {
            res.status(400).json({"message":"failed to get all artifacts"});
        }
    });
};

//get a single artifact by id.
module.exports.getOneArtifact = function(req, res) {
    Artifact.findOne({_id: req.params.id}, function(err, artifact){
        if (!err) {
            res.status(200).json({artifact});
        } else {
            res.status(400).json({"message":"failed to get artifact by id"});
        }
    })
};

//edit an artifact by id
module.exports.editArtifact = function(req, res) {
    Artifact.findOne({_id: req.params.id}, function(err, artifact){
        if (!err) {
            artifact.name = req.body.name;
            artifact.description = req.body.description;
            artifact.year = req.body.year;
            artifact.month = req.body.month;
            artifact.day = req.body.day;
            artifact.currentLocation = req.body.currentLocation;
            artifact.originLocation = req.body.originLocation;
            artifact.familyId = req.body.familyId;
            artifact.category = req.body.category;
            
            artifact.save(function (err, artifact){
                if (!err) {
                    res.status(200).json({"message":"successfully edited artifact"});
                } else {
                    res.status(400).json({"message":"failed to edit artifact"});
                }
            });
        } else {
            res.status(400).json({"message":"failed to edit artifact"});
        }
    })
};

//delete an artifact
module.exports.deleteArtifact = function(req, res) {
    //delete the mongoDB info
    Artifact.deleteOne({_id: req.params.id}, function(err){
        if (!err) {
            res.status(200).json({"message":"artifact deleted"});
        } else {
            res.status(400).json({"message":"failed to delete artifact"});
        }
    })
};

//edit primary image
module.exports.editPrimaryImage = function(req, res, imageUrl){
    Artifact.findOne({_id: req.params.id}, function(err, artifact){
        if(!err){
            artifact.primaryImage = imageUrl;
            res.status(200).json({"message":"primary image added"});
        } else {
            res.status(400).json({"message":"failed to add primary image"});
        }
    })
};