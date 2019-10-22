//This file is done by Qifan Tang
//It is for actions on images
//It is developed in case multiple images required for one artifact
//It includes deleting, adding

//require database,api and schema
var db = require("../models/db.js");
var mongoose = require("mongoose");
var Image = mongoose.model("Image");

//require artifact Controller
var ac = require("../controllers/artifactController.js")

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
    console.log(req.body.file);
    cloudinary.uploader.upload(req.body.file,function(err, img){
        console.log("upload failed");
        if(!err){
            console.log("image uploaded to cloudinary");
            var image = new Image({
                hostId: img.public_id,
                url: img.url,
                artifactId: req.body.id
            });
            //if the image is primary modify the attribute in artifact
            //if(req.body.isPrimary == 1){
            //    ac.editPrimaryImage(req, res, img.url);
            //}

            image.save(function (err, image){
                if (!err) {
                    res.status(200).json({"message":"image added"});
                } else {
                    res.status(400).json({"message":"failed to add image"});
                }
            });
        } else {
            res.status(400).json({"message":"failed to upload image to cloudinary"});
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
                    res.status(200).json({"message":"image deleted"});
                } else {
                    res.status(400).json({"message":"failed to delete image"});
                }
            });
        } else {
            res.status(400).json({"message":"failed todelete image in cloudinary"});
        }
    });
};

//delete all images related to the artifact
module.exports.deleteImgByArtifact = function(req,res){
    Image.find({artifactId: req.params.id}, function(err, images){
        for (image of images) {
            //delete in coudinary
            cloudinary.uploader.destroy(image.hostId, function(err){
                if (!err){
                    //delete in database
                    Image.deleteOne({_id: image._id}, function(err){
                        if (err){
                            res.status(400).json({"message":"failed to delete images by artifact"});
                        }
                    })
                } else {
                    res.status(400).json({"message":"failed to delete image in cloudinary"});
                }
            }); 
        }
    });
};


//send the images by artifact
module.exports.getImgByArtifact = function(req,res){
    Image.find({artifactId: req.params.id}, function(err, images){
        if (!err) {
            res.status(200).json(images);
        } else {
            res.status(400).json({"message":"failed to get all images by artifact"});
        }
    })
};


//this function is for upload the image to host and database
module.exports.addFakeImage = function(req,res){
    cloudinary.uploader.upload("./server/images/lc3.jpg",function(err, img){
        if(!err){
            var image = new Image({
                hostId: img.public_id,
                url: img.url,
                artifactId: req.params.id
            });

            image.save(function (err, image){
                if (!err) {
                    res.status(200).json({"message":"image added"});
                } else {
                    res.status(400).json({"message":"failed to add image"});
                }
            });
        } else {
            console.log(err);
            res.status(400).json({"message":"failed to upload image to cloudinary"});
        }
    });
};