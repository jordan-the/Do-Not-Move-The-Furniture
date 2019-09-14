//This file is done by Qifan Tang
//It is for user schema

const mongoose = require("mongoose");
//const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
        username: String,
        password: String,
        email: String});

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);