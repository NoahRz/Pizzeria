var mongoose = require('mongoose');

var Schema = mongoose.Schema;
let Pizza = require("./pizza");
let Drink = require("./drink");
let Dessert = require("./dessert");



var MenuSchema = new Schema({
  name : String,
  pizzas : [{
      type: Schema.ObjectId,
      ref: 'Pizza'
    }],
  drinks : [{
      type: Schema.ObjectId,
      ref: 'Drink'
    }],
  desserts : [{
      type: Schema.ObjectId,
      ref: 'Dessert'
    }]
});

module.exports = mongoose.model('Menu', MenuSchema);