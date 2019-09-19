//This file is done by Qifan Tang
//It is for actions on images
//It is developed in case multiple images required for one artifact
//It includes deleting, adding

//require database,api and schema
var db = require("../models/db.js");
var mongoose = require("mongoose");
var Image = mongoose.model("Image");

//require image hosting api
var cloudinary = require("cloudinary").v2;

//setting api config
cloudinary.config({
    cloud_name: "dnmtf",
    api_key: "285384815636574",
    api_secret: "koP_fitGdGntiPk_DJ6yrNnp8fY"
});

//this function is for upload the image to host and database
module.exports.addImage = function(artifactId){
    //upload the image to host
    cloudinary.uploader.upload("controllers/testimg.jpeg",function(err, img){
        if(!err){
            console.log("image uploaded");
            //upload info to database
            var image = new Image({
                hostId: img.public_id,
                url: img.url,
                artifactId: artifactId
            });

            image.save(function (err, image){
                if (!err) {
                    //do sometihing
                    console.log("successfully added image");
                    console.log(image);
                } else {
                    console.log("failed to add image");
                    res.sendStatus(400);
                }
            });
        } else {
            console.log("failed to upload image");
            console.log(err);
        }
    });
};

//delete an artifact
module.exports.deleteImg = function(imageId) {
    //delete the image first
    cloudinary.uploader.destroy(imageId);
    console.log("image deleted");
};