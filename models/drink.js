var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var DrinkSchema = new Schema({
  name: String,
  size: [{
    name: String,
    value: Number
  }],
  startingPrice: Number, // price in Euro
  ratio: Number
});

module.exports = mongoose.model('Drink', DrinkSchema);