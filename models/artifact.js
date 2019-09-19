//This file is done by Qifan Tang
//It is for artifact schema

var mongoose = require('mongoose');

var artifactSchema = mongoose.Schema({
    name: String,
    discription: String,
    image: String,
    time: Date,
    hostId: String
    });


module.exports = mongoose.model("Artifact", artifactSchema);