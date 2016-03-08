/**
 * Created by stephenvasquez on 3/6/16.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var blogPosts = new Schema ({

    title: String,
    body: String,
    createdOn: String,
    image: String,
    author: String,
    comments: Array,
    likes: Number,
    urlKey: String
}, {collection: 'blogPosts'});

var Blogs = mongoose.model("blogs", blogPosts);

module.exports = Blogs;