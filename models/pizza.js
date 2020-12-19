var mongoose = require('mongoose');

var Schema = mongoose.Schema;
let Ingredient = require("./ingredient")

var PizzaSchema = new Schema({
  name: String,
  description: String,
  ingredient: [{
    type: Schema.ObjectId,
    ref: 'Ingredient'
  }], // Don't know if we need to reference or embedd is good
  size: [{
    name: String,
    value: Number
  }],
  startingPrice: Number, // price in Euro
  ratio: Number
});

module.exports = mongoose.model('Pizza', PizzaSchema);