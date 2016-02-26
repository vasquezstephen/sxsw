/**
 * Created by stephenvasquez on 2/24/16.
 */
var People = require('../../models/people');
// Wrap all the methods in an object

var people = {
    getAll: function(req, res, next){
        People.find(function(err,data){
            if(err) {}
            res.json(data);
        });
    }
};

// Return the object
module.exports = people;