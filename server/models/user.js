//This file is done by Qifan Tang
//It is for user schema

var mongoose = require("mongoose");
//const passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
        username: String,
        password: String,
        email: String});

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);