//This file is done by Qifan Tang
//It is for image schema
//It is created in case of the multi image situation

var mongoose = require("mongoose");

var imageSchema = mongoose.Schema({
    hostId: String,
    url: String,
    artifactId: String
});

module.exports = mongoose.model("Image", imageSchema);