//This file is done by Qifan Tang
//It is for actions on artifacts

//require database,api and schema
const db = require("../models/db.js");
const mongoose = require("mongoose");
const Artifact = mongoose.model("Artifact");

//require image hosting api
const cloudinary = require("cloudinary").v2;

//setting api config
cloudinary.config({
    cloud_name: "dnmtf",
    api_key: "285384815636574",
    api_secret: "koP_fitGdGntiPk_DJ6yrNnp8fY"
});

//requre controller
const ac = require("../controllers/artifactController.js");

module.exports.addArtifact = function(req, res){
    cloudinary.uploader.upload("controllers/testimg.jpeg",function(err, img){
        if(!err){
            console.log("image uploaded");
            ac.addArtifactInfo(req, img, res);
        } else {
            console.log("failed to upload image");
            console.log(err);
        }
    });
};

//add artifact to database
module.exports.addArtifactInfo = function(req,img, res) {

    var artifact = new Artifact({
        name: "name",
        //name: req.body.username,
        discription: "word discription",
        //discription: req.body.discription,
        //image: result.url.toString(),
        image: img.url,
        time: "2002-12-09",
        //time: req.body.time
        hostId: img.public_id
        //hostId: result.id.toString()
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