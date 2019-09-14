//This file is done by Qifan Tang
//It is for family member schema

const mongoose = require("mongoose");

const familySchema = mongoose.Schema({
    name: String
    });

module.exports = mongoose.model("Family", familySchema);