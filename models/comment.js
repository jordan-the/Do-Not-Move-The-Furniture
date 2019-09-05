var mongoose = require('mongoose');
var commentSchema = mongoose.Schema(
    {
        comment: String,
        storyid: String,
        author: String
    }
);
module.exports = mongoose.model('Comment', commentSchema);