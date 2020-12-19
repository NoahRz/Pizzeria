var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var TableSchema = new Schema({
  name : String,
  place : Number,
});

module.exports = mongoose.model('Table', TableSchema);