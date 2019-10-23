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
            res.status(200).json(category);
        } else {
            res.status(400).json({"message":"failed to add category"});
        }
    });
};

//fetch all the categories
module.exports.getAllCategories = function(req, res) {
    Category.find(function(err, categories){
        if (!err) {
            res.status(200).json(categories);
        } else {
            res.status(400).json({"message":"failed to get all categories"});
        }
    });
};


//edit an vategory by id
module.exports.editCategory = function(req, res) {
    Category.findOne({_id: req.params.id}, function(err, category){
        if (!err) {
            category.name = req.body.name;
            
            category.save(function (err, category){
                if (!err) {
                    res.status(200).json({"message":"category edited"});
                } else {
                    res.status(400).json({"message":"failed to edit category"});
                }
            });
        } else {
            res.status(400).json({"message":"failed to edit category"});
        }
    })
};

//delete an artifact
module.exports.deleteCategory = function(req, res) {
    Category.deleteOne({_id:req.params.id}, function(err){
        if (!err) {
            //do sometihing
            res.status(200).json({"message":"category deleted"});
        } else {
            res.status(400).json({"message":"failed to delete category"});
        }
    })
};
