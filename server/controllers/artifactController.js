//This file is done by Qifan Tang
//It is for actions on artifacts
//include edit, add, get, delete artifacts and images.

//import database
var db = require("../models/db.js");
var mongoose = require("mongoose");
var Artifact = mongoose.model("Artifact");

//add artifact to database
module.exports.addArtifact = function(req,img, res) {
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
            //do sometihing
            console.log("successfully added artifact");
            console.log(artifact);
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
            //do sometihing
            console.log(artifacts);
        } else {
            console.log("failed to get artifacts");
            res.sendStatus(400);
        }
    });
};

//get a single artifact by id.
module.exports.getOneArtifact = function(req, res) {
    //Artifact.findOne({_id: req.params.id}, function(err, artifact){
    Artifact.findOne({_id: "5d725bdff18690df4098211f"}, function(err, artifact){
        if (!err) {
            //do sometihing
            console.log(artifact);
        } else {
            console.log("failed to get artifact by id");
            res.sendStatus(400);
        }
    })
};

//edit an artifact by id
module.exports.editArtifact = function(req, res) {
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

//delete an artifact
module.exports.deleteArtifact = function(req, res) {
    //Artifact.findOne({_id: req.params.id}, function(err, artifact){
    //delete the image first
    Artifact.findOne({_id:"5d7e25f9bbb10a17647a5ab7"}, function(err, artifact){
        var result = cloudinary.uploader.destroy(artifact.hostId);
        console.log("image deleted");
    });
    //delete the mongoDB info
    Artifact.deleteOne({_id:"5d7e25f9bbb10a17647a5ab7"}, function(err){
        if (!err) {
            //do sometihing
            console.log("artifact deleted");
        } else {
            console.log("failed to delete artifact by id");
            res.sendStatus(400);
        }
    })
};