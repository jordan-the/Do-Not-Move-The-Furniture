//This file is done by Qifan Tang
//It is for establish connection with database

// Connect to Database
var mongoose = require("mongoose");

try {
    mongoose.connect("mongodb+srv://qifan:donotmovethefurniture@cluster0-wdsdl.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
    console.log("fall to connect to mongodb");
}

//require the schemas
require("./user.js");
require("./artifact.js");
require("./family.js");
require("./category.js");
require("./image.js");
require("./artifactCategoryRelationship.js");