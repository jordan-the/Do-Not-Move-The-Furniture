//This file is done by Qifan Tang
//It is for overall controller interact with the pages

//import database and api
var db = require("../models/db.js");
var mongoose = require("mongoose");

//import individual controllers
var ac = require("../controllers/artifactController.js");
var cc = require("../controllers/categoryController.js");
var fc = require("../controllers/familyController.js");

//connect routes to controllers
module.exports.checkConnection = function(req,res){
    res.send("successfully connected");
}
//artifacts
module.exports.getAllArtifact = function(req,res){
    ac.getAllArtifacts(req,res);
};

module.exports.getOneArtifact = function(req,res){
    ac.getOneArtifact(req,res);
};

module.exports.addArtifact = function(req,res){
    ac.addArtifact(req,res);
};

module.exports.editArtifact = function(req,res){
    ac.editArtifact(req,res);
};

module.exports.addArtifact = function(req,res){
    ac.addArtifact(req,res);
};

//to delete an artifact, also need to delete the images as well
module.exports.deleteArtifact = function(req,res){
    ic.deleteImgByArtifact(req,res);
    ac.deleteArtifact(req,res);
};

//images
module.exports.addImage = function(req,res){
    ic.addImage(req,res);
};

module.exports.deleteImageById = function(req,res){
    ic.deleteImgById(req,res);
};

module.exports.getImageByArtifact = function(req,res){
    ic.getImgByArtifact(req,res);
};

//category

//family member