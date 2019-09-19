//This file is done by Qifan Tang
//It is for category schema

var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: String
    });


module.exports = mongoose.model("Category", categorySchema);