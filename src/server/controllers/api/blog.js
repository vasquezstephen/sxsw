/**
 * Created by stephenvasquez on 3/6/16.
 */
var Blogs = require('../../models/blogs');
// Wrap all the methods in an object

var blog = {
    //read: function(req, res, next){
    //  res.json({type: "Read", id: req.params.id});
    //},
    create: function(req, res, next){
        console.log(req);
        var post = new Blogs(req.body);
        console.log(event);
        post.save();
    },
    //update: function(req, res, next){
    //  res.json({type: "Update", id: req.params.id, body: req.body });
    //},
    //delete: function(req, res, next){
    //  res.json({type: "Delete", id: req.params.id});
    //},
    getAll: function(req, res, next){
        Blogs.find(function(err,data){
            if(err) {}
            res.json(data);
        });
    }
};

// Return the object
module.exports = blog;
