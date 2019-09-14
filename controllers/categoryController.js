//This file is done by Qifan Tang
//It is for actions on category

//require database,api and schema
const db = require("../models/db.js");
const mongoose = require("mongoose");
const Category = mongoose.model("Category");


//add category to database
module.exports.addCategory = function(req, res) {
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
            console.log(categories);
        } else {
            console.log("failed to get categories");
            res.sendStatus(400);
        }
    });
};


//edit an artifact by id
module.exports.editCategory = function(req, res) {
    //Artifact.findOne({_id: req.params.id}, function(err, artifact){
    Category.findOne({_id: "5d725bdff18690df4098211f"}, function(err, category){
        if (!err) {
            //do sometihing
            console.log(category);
        } else {
            console.log("failed to get category by id");
            res.sendStatus(400);
        }

        category.name = "changed name";
        console.log(category);
    })
};

//delete an artifact
module.exports.deleteCategory = function(req, res) {
    Category.deleteOne({_id:"5d725bdff18690df4098211f"}, function(err){
        if (!err) {
            //do sometihing
            console.log("category deleted");
        } else {
            console.log("failed to delete category by id");
            res.sendStatus(400);
        }
    })
};