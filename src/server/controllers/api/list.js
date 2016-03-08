var Lists = require('../../models/lists');
// Wrap all the methods in an object

var list = {
  //read: function(req, res, next){
  //  res.json({type: "Read", id: req.params.id});
  //},
  create: function(req, res, next){
    var event = new Lists(req.body);
    event.save();
  },
  //update: function(req, res, next){
  //  res.json({type: "Update", id: req.params.id, body: req.body });
  //},
  //delete: function(req, res, next){
  //  res.json({type: "Delete", id: req.params.id});
  //},
  getAll: function(req, res, next){
    Lists.find(function(err,data){
      if(err) {}
      res.json(data);
    });
  } 
};

// Return the object
module.exports = list;
