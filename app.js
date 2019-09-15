//This file is done by Qifan Tang
//It is for running the test environment

// require express
const express = require("express");
const app = express();

//require routes
const router = require("./routes/routes.js");

//set port number
const PORT = process.env.PORT || 3000;

//require('./models/db.js');

//require controller
const controller = require("./controllers/controller.js");
const ac = require("./controllers/artifactController.js");
const cc = require("./controllers/categoryController.js");
// Set the view engine
app.set("view engine","ejs");

//set the dir
app.use(express.static(__dirname));


//use router
app.use("/",router);

// Start the app at the Port point
app.listen(PORT,function(){
    console.log("Express listening on port 3000");
});

//testing api
//artifact controller testing
//ac.addArtifact();
//cc.getOneCategory();
//ac.getAllArtifacts();
//ac.getOneArtifact({_id: '5d725bdff18690df4098211f'});
//ac.editArtifact();
//ac.deleteArtifact();

//category controller testing
//cc.getAllCategories();

//image controller testing
//ic.uploadimg();
//ic.findimg();