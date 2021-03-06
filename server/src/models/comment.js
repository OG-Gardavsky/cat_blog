const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
            trim: true
        },
        articleId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Article'
        },
        ts: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

/**
 * creates link to article
 */
commentSchema.virtual('commentVotes', {
    ref: 'CommentVote',
    localField: '_id',
    foreignField: 'commentId'
});



const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
