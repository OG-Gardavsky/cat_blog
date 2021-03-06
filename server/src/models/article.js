const mongoose = require('mongoose');
const validator = require('validator');


const articleSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        perex: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        ts: {
            type: Date,
            required: true,
            default: Date.now
        }
    },
    { timestamp: true }
);


/**
 * creates link to article
 */
articleSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'articleId'
});



const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
