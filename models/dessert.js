var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var DessertSchema = new Schema({
  name: String,
  size: [{
    name: String,
    value: Number
  }],
  startingPrice: Number, // price in Euro
  ratio: Number
});

module.exports = mongoose.model('Dessert', DessertSchema);