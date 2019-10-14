//This file is done by Qifan Tang
//It is for family member schema

var mongoose = require("mongoose");

var familySchema = mongoose.Schema({
    name: String
    //bday: Date
});

module.exports = mongoose.model("Family", familySchema);