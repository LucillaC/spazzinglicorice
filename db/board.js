// # Mongoose Board Model & Schema

// ##### [Back to Table of Contents](./tableofcontents.html)

var mongoose = require('mongoose');
var db = require('./config');

var boardSchema = new mongoose.Schema({
  // change id to name
  id: String,
  strokes: Array
});

var Board = mongoose.model('board', boardSchema);

// Required by [Server](../documentation/server.html) & [Socket Connection Handler](../documentation/sockets.html)
module.exports = Board;
