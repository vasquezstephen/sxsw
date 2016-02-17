var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userInfo = new Schema ({

    user: String,
    pass: String
}, {collection: 'userInfo'});

var Users = mongoose.model("users", userInfo);

module.exports = Users;