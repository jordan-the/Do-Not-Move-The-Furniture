const db = require('../models/db');
const mongoose = require('mongoose');


//import the database
const User = mongoose.model('User');
const Artifact = mongoose.model('Artifact');

//coming soon page
module.exports.coming = function(req,res){
    res.render('coming');
};


//add artifact to database
module.exports.addartifact = function(req, res) {
    var artifact = new Artifact({
        name: "name",
        //name: req.body.username,
        discription: "word discription",
        //discription: req.body.discription,
        image: "image",
        //image: req.body.image,
        time: "2002-12-09"
        //time: req.body.time
    });

    artifact.save(function (err, artifact){
        if (!err) {

            //do sometihing
            console.log('successfully added artifact')
        } else {
            console.log('failed to add artifact')
            res.sendStatus(400);
        }
    });
};

//fetch all the artifacts
module.exports.getAllArtifacts = function(req, res) {
    Artifact.find(function(err, artifacts){
        if (!err) {
            //do sometihing
            console.log(artifacts)
        } else {
            console.log('failed to get artifacts');
            res.sendStatus(400);
        }
    });
};


module.exports.getOneArtifact = function(req, res) {
    //Artifact.findOne({_id: req.params.id}, function(err, artifact){
    Artifact.findOne({_id: '5d725bdff18690df4098211f'}, function(err, artifact){
        if (!err) {
            //do sometihing
            console.log(artifact);
        } else {
            console.log('failed to get artifact by id')
            res.sendStatus(400);
        }
    })
}