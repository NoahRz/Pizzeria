var mongoose = require('mongoose');

var Schema = mongoose.Schema;
let Pizza = require("./pizza")


var IngredientSchema = new Schema({
  name : String,
  forPizza: [{
      type: Schema.ObjectId,
      ref: 'Pizza'
  }]
});

module.exports = mongoose.model('Ingredient', IngredientSchema);