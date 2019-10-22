//This file is done by Qifan Tang
//It is for the relationship between artifact and category schema

var mongoose = require('mongoose');

var acRelationshipSchema = mongoose.Schema({
    artifactId: String,
    categoryId: String
});


module.exports = mongoose.model("acRelationship", acRelationshipSchema);