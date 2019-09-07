const mongoose = require('mongoose');

const artifactSchema = mongoose.Schema(
    {
        name: String,
        discription: String,
        image: String,
        time: Date
    }
);


module.exports = mongoose.model('Artifact', artifactSchema);