//This file is done by Qifan Tang
//It is for artifact schema

var mongoose = require('mongoose');

var artifactSchema = mongoose.Schema({
    name: String,
    description: String,
    time: String,
    //year,month,date
    primaryImage: String,
    category: String,
    currentLocation: String,
    originLocation: String,
    familyId: String
});


module.exports = mongoose.model("Artifact", artifactSchema);