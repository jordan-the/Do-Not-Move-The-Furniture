//This file is done by Qifan Tang
//It is for overall controller interact with the pages

//import database and api
var db = require("../models/db.js");
var mongoose = require("mongoose");

//import individual controllers
var ac = require("../controllers/artifactController.js");
var cc = require("../controllers/categoryController.js");
var fc = require("../controllers/familyController.js");
var uc = require("../controllers/userController.js");
var ic = require("../controllers/imageController.js");
var acrc = require("../controllers/acRelationship.js");

//connect routes to controllers
module.exports.checkConnection = function(req,res){
    res.send("successfully connected");
};

module.exports.testPost = function(req,res){
    console.log(req.body);
    //console.log(req.body.name);
    res.send("received");
};

module.exports.addFakeImage = function(req,res){
    ic.addImage2(req,res);
};


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
module.exports.getCategory = function(req,res){
    cc.getAllCategories(req,res);
};

module.exports.addCategory = function(req,res){
    cc.addCategory(req,res);
};

module.exports.editCategory = function(req,res){
    cc.editCategory(req, res);
};

module.exports.deleteCategory = function(req,res){
    cc.deleteCategory(req,res);
};

//family member
module.exports.addFamily = function(req,res){
    fc.addFamily(req,res);
};

module.exports.editFamily = function(req,res){
    fc.editFamily(req,res);
};

module.exports.deleteFamily = function(req,res){
    fc.deleteFamily(req, res);
};

module.exports.getAllFamily = function(req,res){
    fc.getAllFamilys(req,res);
};

module.exports.getOneFamily = function(req,res){
    fc.getOneFamily(req,res);
};

module.exports.addUser = function(req,res){
    uc.addUser(req,res);
};

module.exports.getUser = function(req,res){
    uc.getUser(req,res);
};

module.exports.getUserByID = function(req,res){
    uc.getOneUser(req,res);
};

module.exports.getUserByEmail = function(req,res){
    uc.getOneUserByEmail(req,res);
};

module.exports.editUser = function(req,res){
    uc.editUser(req,res);
};

module.exports.addRelationship = function(req,res){
    acrc.addRelationship(req,res);
};

module.exports.getRelationship = function(req,res){
    acrc.getRelationship(req,res);
};

module.exports.getRelationshipById = function(req,res){
    acrc.getRelationById(req,res);
};

module.exports.getRelationshipByArtifact = function(req,res){
    acrc.getRelationByArtifact(req,res);
};

module.exports.getRelationshipByCategory = function(req,res){
    acrc.getRelationByCategory(req,res);
};

module.exports.deleteRelationship = function(req,res){
    acrc.deleteRelation(req,res);
};