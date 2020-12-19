const mongoose = require('mongoose');
const timeZone = require('mongoose-timezone');

var Schema = mongoose.Schema;
let Pizza = require("./pizza");
let Drink = require("./drink");
let Dessert = require("./dessert");


var OrderSchema = new Schema({
    pizzas: [{
        item: {
            type: Schema.ObjectId,
            ref: 'Pizza'
        },
        name: String,
        size: {
            type: String,
        },
        quantity: Number
    }],
    desserts: [{
        item: {
            type: Schema.ObjectId,
            ref: 'Dessert'
        },
        name: String,
        size: {
            type: String,
        },
        quantity: Number
    }],
    drinks: [{
        item: {
            type: Schema.ObjectId,
            ref: 'Drinks'
        },
        name: String,
        size: {
            type: String,
        },
        quantity: Number
    }],
    orderDate: { // pas obligatoire, mais bien pour s'assurer qu'on est bien sur le bon et on peut les classer par date plus tard
        type: Date
        // Default value needed ?
    },
    takeaway: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

OrderSchema.plugin(timeZone, { paths: ['createdAt', 'orderDate'] });
module.exports = mongoose.model('Order', OrderSchema);
