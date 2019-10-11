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
        time: req.body.time,
        currentLocation: req.body.currentLocation,
        originLocation: req.body.originLocation,
        familyId: req.body.familyId
    });

    artifact.save(function (err, artifact){
        if (!err) {
            res.send("successfully added artifact")
        } else {
            console.log("failed to add artifact");
            res.sendStatus(400);
        }
    });
};

//fetch all the artifacts
module.exports.getAllArtifacts = function(req, res) {
    Artifact.find(function(err, artifacts){
        if (!err) {
            res.send(artifacts);
        } else {
            console.log("failed to get artifacts");
            res.sendStatus(400);
        }
    });
};

//get a single artifact by id.
module.exports.getOneArtifact = function(req, res) {
    Artifact.findOne({_id: req.params.id}, function(err, artifact){
        if (!err) {
            res.send(artifact);
        } else {
            console.log("failed to get artifact by id");
            res.sendStatus(400);
        }
    })
};

//edit an artifact by id
module.exports.editArtifact = function(req, res) {
    Artifact.findOne({_id: req.params.id}, function(err, artifact){
        if (!err) {
            artifact.name = req.body.name;
            artifact.description = req.body.description;
            artifact.time = req.body.time;
            artifact.currentLocation = req.body.currentLocation;
            artifact.originLocation = req.body.originLocation;
            artifact.familyId = req.body.familyId;
            res.send(artifact);
        } else {
            console.log("failed to get artifact by id");
            res.sendStatus(400);
        }
    })
};

//delete an artifact
module.exports.deleteArtifact = function(req, res) {
    //delete the mongoDB info
    Artifact.deleteOne({_id: req.params.id}, function(err){
        if (!err) {
            res.send("artifact deleted");
        } else {
            console.log("failed to delete artifact by id");
            res.sendStatus(400);
        }
    })
};

//following are for testing

//add artifact to database
module.exports.addArtifact2 = function(req, res) {
    var artifact = new Artifact({
        name: "name",
        //name: req.body.username,
        description: "word discription",
        //description: req.body.discription,
        time: "2002-12-09",
        currentLocation: "location",
        originLocation: "location"
    });

    artifact.save(function (err, artifact){
        if (!err) {
            res.send("successfully added artifact")
        } else {
            console.log("failed to add artifact");
            res.sendStatus(400);
        }
    });
};



//edit an artifact by id
module.exports.editArtifact2 = function(req, res) {
    Artifact.findOne({_id: "5d725bdff18690df4098211f"}, function(err, artifact){
        if (!err) {
            //do sometihing
            console.log(artifact);
        } else {
            console.log("failed to get artifact by id");
            res.sendStatus(400);
        }
        artifact.name = "changed";
        artifact.discription = "also changed";
        artifact.time = "2000-12-09";
    })
};