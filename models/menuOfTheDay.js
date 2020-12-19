var mongoose = require('mongoose');

var Schema = mongoose.Schema;
let Pizza = require("./pizza");
let Drink = require("./drink");
let Dessert = require("./dessert");


var MenuOfTheDaySchema = new Schema({
    name : String,
    pizza: {
        type: Schema.ObjectId,
        ref: 'Pizza',
    },
    drink: {
        type: Schema.ObjectId,
        ref: 'Drink',
    },
    dessert : {
        type: Schema.ObjectId,
        ref: 'Dessert'
    }
});

module.exports = mongoose.model('MenuOfTheDay', MenuOfTheDaySchema);