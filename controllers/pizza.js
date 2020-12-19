function createPizza(req, res) {
    let Pizza = require('../models/pizza');
    let newPizza = Pizza({
        name: req.body.name,
        description: req.body.description,
        ingredient: req.body.ingredient,
        size: req.body.size,
        startingPrice: req.body.startingPrice,
        ratio: req.body.ratio
    });

    newPizza.save()
        .then((savedPizza) => {

            //send back the created pizza
            res.json(savedPizza);

        }, (err) => {
            res.status(400).json(err)
        });
}

function readPizzas(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.find({})
        .populate('ingredient')
        .then((pizzas) => {
            res.status(200).json(pizzas);
        }, (err) => {
            res.status(500).json(err);
        });
}

function readPizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findById({ _id: req.params.id })
        .populate('ingredient')
        .then((pizza) => {
            res.status(200).json(pizza);
        }, (err) => {
            res.status(500).json(err);
        });
}

function updatePizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({ _id: req.params.id },
        {
            name: req.body.name,
            description: req.body.description,
            ingredient: req.body.ingredient,
            size: req.body.size,
            startingPrice: req.body.startingPrice,
            ratio: req.body.ratio
        },
        { new: true })
        .then((updatedPizza) => {
            res.status(200).json(updatedPizza);
        }, (err) => {
            res.status(500).json(err);
        });
}

function deletePizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findOneAndRemove({ _id: req.params.id })
        .then((deletedPizza) => {
            res.status(200).json(deletedPizza);
        }, (err) => {
            res.status(500).json(err);
        });
}


module.exports.createPizza = createPizza;
module.exports.readPizzas = readPizzas;
module.exports.readPizza = readPizza;
module.exports.updatePizza = updatePizza;
module.exports.deletePizza = deletePizza;
