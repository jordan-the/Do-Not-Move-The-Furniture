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
            console.log("successfully added user");
            res.send("successfully added user");
        } else {
            console.log("failed to add user");
            res.sendStatus(400);
        }
    });
};

//fetch all the users
module.exports.getUser = function(req, res) {
    User.find(function(err, users){
        if (!err) {
            res.send(users);
        } else {
            console.log("failed to get users");
            res.sendStatus(400);
        }
    });
};

//get a single user by id.
module.exports.getOneUser = function(req, res) {
    User.findOne({_id: req.params.id}, function(err, user){
        if (!err) {
            // res.send(user);
            res.json(user);
        } else {
            console.log("failed to get user by id");
            res.sendStatus(400);
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
            res.send(user);
        } else {
            console.log("failed to get user by id");
            res.sendStatus(400);
        }
    })
};

