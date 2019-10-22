//This file is done by Qifan Tang
//It is for actions on users
//include edit, add, get, delete users and images.

//import database
var db = require("../models/db.js");
var mongoose = require("mongoose");
var User = mongoose.model("User");

//add user to database
module.exports.addUser = function(req, res) {
    var user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    user.save(function (err, user){
        if (!err) {
            res.status(200).json({"message":"user added"});
        } else {
            res.status(400).json({"message":"failed to add user"});
        }
    });
};

//fetch all the users
module.exports.getUser = function(req, res) {
    User.find(function(err, users){
        if (!err) {
            res.status(200).json(users);
        } else {
            res.status(400).json({"message":"failed to get all users"});
        }
    });
};

//get a single user by id.
module.exports.getOneUser = function(req, res) {
    User.findOne({_id: req.params.id}, function(err, user){
        if (!err) {
            res.status(200).json(user);
        } else {
            res.status(400).json({"message":"failed to get user by id"});
        }
    })
};

//get a single user by id.
module.exports.getOneUserByEmail = function(req, res) {
    User.findOne({email: req.params.email}, function(err, user){
        if (!err) {
            res.status(200).json(user);
        } else {
            res.status(400).json({"message":"failed to get user by email"});
        }
    })
};

//edit an user by id
module.exports.editUser = function(req, res) {
    User.findOne({_id: req.params.id}, function(err, user){
        if (!err) {
            user.name = req.body.name;
            user.password = req.body.password;
            user.email = req.body.email;

            user.save(function (err, user){
                if (!err) {
                    res.status(200).json({"message":"user edited"});
                } else {
                    res.status(400).json({"message":"failed to edit user"});
                }
            });
        } else {
            res.status(400).json({"message":"failed to edit user"});
        }
    })
};

