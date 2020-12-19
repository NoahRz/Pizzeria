function createDessert(req, res) {
    let Dessert = require('../models/dessert');
    let newDessert = Dessert({
        name: req.body.name,
        size: req.body.size,
        startingPrice: req.body.startingPrice,
        ratio: req.body.ratio,
    });

    newDessert.save()
        .then((savedDessert) => {

            res.json(savedDessert);

        }, (err) => {
            res.status(400).json(err)
        });
}

function readDesserts(req, res) {

    let Dessert = require("../models/dessert");

    Dessert.find({})
        .then((dessert) => {
            res.status(200).json(dessert);
        }, (err) => {
            res.status(500).json(err);
        });
}

function readDessert(req, res) {

    let Dessert = require("../models/dessert");

    Dessert.findById({ _id: req.params.id })
        .then((dessert) => {
            res.status(200).json(dessert);
        }, (err) => {
            res.status(500).json(err);
        });
}

function updateDessert(req, res) {

    let Dessert = require("../models/dessert");

    Dessert.findByIdAndUpdate({ _id: req.params.id },
        {
            name: req.body.name,
            size: req.body.size,
            startingPrice: req.body.startingPrice,
            ratio: req.body.ratio
        },
        { new: true })
        .then((updatedDessert) => {
            res.status(200).json(updatedDessert);
        }, (err) => {
            res.status(500).json(err);
        });
}

function deleteDessert(req, res) {

    let Dessert = require("../models/dessert");

    Dessert.findOneAndRemove({ _id: req.params.id })
        .then((deletedDessert) => {
            res.status(200).json(deletedDessert);
        }, (err) => {
            res.status(500).json(err);
        });
}

module.exports.deleteDessert = deleteDessert; //
module.exports.createDessert = createDessert;
module.exports.readDesserts = readDesserts;
module.exports.readDessert = readDessert;
module.exports.updateDessert = updateDessert;
