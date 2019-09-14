//This file is done by Qifan Tang
//It is for category schema

const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: String
    });


module.exports = mongoose.model("Category", categorySchema);