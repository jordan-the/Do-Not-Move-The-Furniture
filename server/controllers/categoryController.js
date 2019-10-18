//This file is done by Qifan Tang
//It is for actions on category
//It includes all functions for category
//edit, add, delete etc.

//require database,api and schema
var db = require("../models/db.js");
var mongoose = require("mongoose");
var Category = mongoose.model("Category");


//add category to database
module.exports.addCategory = function(req, res) {
    var category = new Category({
        name: req.body.name
    });

    category.save(function (err, category){
        if (!err) {

            //do sometihing
            console.log("successfully added category");
            console.log(category);
        } else {
            console.log("failed to add category");
            res.sendStatus(400);
        }
    });
};
//add category to database
module.exports.addCategory2 = function(req, res) {
    var category = new Category({
        name: "name"
    });

    category.save(function (err, category){
        if (!err) {

            //do sometihing
            console.log("successfully added category");
            console.log(category);
        } else {
            console.log("failed to add category");
            res.sendStatus(400);
        }
    });
};

//fetch all the categories
module.exports.getAllCategories = function(req, res) {
    Category.find(function(err, categories){
        if (!err) {
            //do sometihing
            res.send(categories);
        } else {
            console.log("failed to get categories");
            res.sendStatus(400);
        }
    });
};


//edit an artifact by id
module.exports.editCategory = function(req, res) {
    //Artifact.findOne({_id: req.params.id}, function(err, artifact){
    Category.findOne({_id: req.params.id}, function(err, category){
        if (!err) {
            //do sometihing
            category.name = req.body.name;
            res.send("successfully changed category");
        } else {
            console.log("failed to get category by id");
            res.sendStatus(400);
        }
    })
};

//delete an artifact
module.exports.deleteCategory = function(req, res) {
    Category.deleteOne({_id:req.params.id}, function(err){
        if (!err) {
            //do sometihing
            res.send("category deleted");
        } else {
            console.log("failed to delete category by id");
            res.sendStatus(400);
        }
    })
};
