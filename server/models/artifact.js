//This file is done by Qifan Tang
//It is for artifact schema

var mongoose = require('mongoose');

var artifactSchema = mongoose.Schema({
    name: String,
    description: String,
    year: String,
    monoth: String,
    date: String,
    primaryImage: String,
    category: String,
    currentLocation: String,
    originLocation: String,
    familyId: String
});


module.exports = mongoose.model("Artifact", artifactSchema);