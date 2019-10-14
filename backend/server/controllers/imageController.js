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
module.exports.addImage = function(req,res){
    //upload the image to host
    cloudinary.uploader.upload(req.body.file,function(err, img){
        if(!err){
            console.log("image uploaded to cloudinary");
            var image = new Image({
                hostId: img.public_id,
                url: img.url,
                artifactId: req.params.id
            });

            image.save(function (err, image){
                if (!err) {
                    res.send("image added to database and cloudinary");
                } else {
                    console.log("failed to add image to database");
                    res.sendStatus(400);
                }
            });
        } else {
            console.log("failed to upload image to cloudinary");
            console.log(err);
        }
    });
};

//delete an artifact
module.exports.deleteImgById = function(req,res) {
    //delete the image first
    cloudinary.uploader.destroy(req.params.id, function(err){
        if (!err){
            //delete the database info
            Image.deleteOne({hostId: req.params.id}, function(err){
                if (!err){
                    res.send("image deleted");
                } else {
                    console.log("failed to delete image by id in database");
                    res.sendStatus(400);
                }
            });
        } else {
            console.log("failed to delete image by id in cloudinary");
            res.sendStatus(400);
        }
    });
};

//delete all images related to the artifact
module.exports.deleteImgByArtifact = function(req,res){
    Image.find({artifactId: req.params.id}, function(err, images){
        for (image in images) {
            //delete in coudinary
            cloudinary.uploader.destory(image.hostId, function(err){
                if (!err){
                    //delete in database
                    Image.deleteOne({_id: image._id}, function(err){
                        if (err){
                            console.log("failed to delete image in database");
                            res.sendStatus(400);
                        }
                    })
                } else {
                    console.log("failed to delete image in cloudinary");
                    res.sendStatus(400);
                }
            })
        }
        console.log("all images for artifact deleted");
    })
};


//send the images by artifact
module.exports.getImgByArtifact = function(req,res){
    Image.find({artifactId: req.params.id}, function(err, images){
        if (!err) {
            res.send(images);
        } else {
            console.log("failed to get images");
            res.sendStatus(400);
        }
    })
};


//this is for testing

//this function is for upload the image to host and database
module.exports.addImage2 = function(artifactId){
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