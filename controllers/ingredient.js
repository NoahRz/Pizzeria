function createIngredient(req, res){
    let Ingredient = require('../models/ingredient');
    let newIngredient = Ingredient ({
        name: req.body.name,
        forPizza: req.body.forPizza
    });
  
    newIngredient.save()
    .then((savedIngredient) => {

        //send back the created ingredient
        res.json(savedIngredient);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

function readIngredients(req, res) {

    let Ingredient = require("../models/ingredient");

    Ingredient.find({})
    .populate('forPizza')
    .then((ingredient) => {
        res.status(200).json(ingredient);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readIngredient(req, res) {

    let Ingredient = require("../models/ingredient");

    Ingredient.findById({_id : req.params.id})
    .populate('forPizza')
    .then((ingredient) => {
        res.status(200).json(ingredient);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateIngredient(req, res) {

    let Ingredient = require("../models/ingredient");

    Ingredient.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        forPizza : req.body.forPizza}, 
        {new : true})
    .then((updatedIngredient) => {
        res.status(200).json(updatedIngredient);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteIngredient(req, res) {

    let Ingredient = require("../models/ingredient");

    Ingredient.findOneAndRemove({_id : req.params.id})
    .then((deletedIngredient) => {
        res.status(200).json(deletedIngredient);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 module.exports.deleteIngredient = deleteIngredient; //
 module.exports.createIngredient = createIngredient;
 module.exports.readIngredients = readIngredients;
 module.exports.readIngredient = readIngredient;
 module.exports.updateIngredient = updateIngredient;
