/**
 * Created by stephenvasquez on 3/7/16.
 */
var Blogs = require('../../models/blogs');
// Wrap all the methods in an object

var post = {
    getOne: function(req, res, next){
        Blogs.findOne({'urlKey':req.query.urlKey},function(err,data){
            if(err) {}
            res.json(data);
        });
    }
};

// Return the object
module.exports = post;