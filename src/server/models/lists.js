var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var rsvpList = new Schema ({

    title: String,
    description: String,
    date: String,
    dateAdded: String,
    image: String,
    link: String
}, {collection: 'rsvpList'});

var Lists = mongoose.model("lists", rsvpList);

module.exports = Lists;