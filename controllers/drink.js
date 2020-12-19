function createDrink(req, res) {
    let Drink = require('../models/drink');
    let newDrink = Drink({
        name: req.body.name,
        size: req.body.size,
        startingPrice: req.body.startingPrice,
        ratio: req.body.ratio,
    });

    newDrink.save()
        .then((savedDrink) => {

            res.json(savedDrink);

        }, (err) => {
            res.status(400).json(err)
        });
}

function readDrinks(req, res) {

    let Drink = require("../models/drink");

    Drink.find({})
        .then((drink) => {
            res.status(200).json(drink);
        }, (err) => {
            res.status(500).json(err);
        });
}

function readDrink(req, res) {

    let Drink = require("../models/drink");

    Drink.findById({ _id: req.params.id })
        .then((drink) => {
            res.status(200).json(drink);
        }, (err) => {
            res.status(500).json(err);
        });
}

function updateDrink(req, res) {

    let Drink = require("../models/drink");

    Drink.findByIdAndUpdate({ _id: req.params.id },
        {
            name: req.body.name,
            size: req.body.size,
            startingPrice: req.body.startingPrice,
            ratio: req.body.ratio
        },
        { new: true })
        .then((updatedDrink) => {
            res.status(200).json(updatedDrink);
        }, (err) => {
            res.status(500).json(err);
        });
}

function deleteDrink(req, res) {

    let Drink = require("../models/drink");

    Drink.findOneAndRemove({ _id: req.params.id })
        .then((deletedDrink) => {
            res.status(200).json(deletedDrink);
        }, (err) => {
            res.status(500).json(err);
        });
}

module.exports.deleteDrink = deleteDrink; //
module.exports.createDrink = createDrink;
module.exports.readDrinks = readDrinks;
module.exports.readDrink = readDrink;
module.exports.updateDrink = updateDrink;
