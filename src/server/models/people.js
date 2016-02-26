/**
 * Created by stephenvasquez on 2/24/16.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var follow = new Schema ({

    name: String,
    image: String,
    group: String
}, {collection: 'follow'});

var People = mongoose.model("people", follow);

module.exports = People;