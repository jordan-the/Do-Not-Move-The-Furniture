var mongoose = require('mongoose');
var storySchema = mongoose.Schema(
    {
       title: String,
       story: String,
       author: String
    }
);
module.exports = mongoose.model('Story', storySchema);