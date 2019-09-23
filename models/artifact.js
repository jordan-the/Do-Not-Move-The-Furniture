//This file is done by Qifan Tang
//It is for artifact schema

var mongoose = require('mongoose');

var artifactSchema = mongoose.Schema({
    name: String,
    description: String,
    time: Date,
    currentLocation: String,
    originLocation: String
    });


module.exports = mongoose.model("Artifact", artifactSchema);