//This file is done by Qifan Tang
//It is for actions on artifacts

//require database,api and schema
const db = require("../models/db.js");
const mongoose = require("mongoose");
const Artifact = mongoose.model("Artifact");

//add artifact to database
module.exports.addArtifact = function(req, res) {
    var artifact = new Artifact({
        name: "name",
        //name: req.body.username,
        discription: "word discription",
        //discription: req.body.discription,
        image: "image",
        //image: req.body.image,
        time: "2002-12-09"
        //time: req.body.time
    });

    artifact.save(function (err, artifact){
        if (!err) {

            //do sometihing
            console.log("successfully added artifact");
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
        artifact.image = "image2";
        artifact.time = "2000-12-09";
        console.log(artifact);
    })
};

//delete an artifact
module.exports.deleteArtifact = function(req, res) {
    //Artifact.findOne({_id: req.params.id}, function(err, artifact){
    Artifact.deleteOne({_id:"5d725bdff18690df4098211f"}, function(err){
        if (!err) {
            //do sometihing
            console.log("artifact deleted");
        } else {
            console.log("failed to delete artifact by id");
            res.sendStatus(400);
        }
    })
};