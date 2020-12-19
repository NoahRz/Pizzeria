function createMenuOfTheDay(req, res){
    let MenuOfTheDay = require('../models/menuOfTheDay');
    let newMenuOfTheDay = MenuOfTheDay ({
        name: req.body.name,
        pizza: req.body.pizza,
        drink: req.body.drink,
        dessert: req.body.dessert,
    });
  
    newMenuOfTheDay.save()
    .then((savedMenuOfTheDay) => {

        res.json(savedMenuOfTheDay);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

function readMenusOfTheDay(req, res) {

    let MenuOfTheDay = require("../models/menuOfTheDay");

    MenuOfTheDay.find({})
    .populate('pizza')
    .populate('drink')
    .populate('dessert')
    .then((menuOfTheDay) => {
        res.status(200).json(menuOfTheDay);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readMenuOfTheDay(req, res) {

    let MenuOfTheDay = require("../models/menuOfTheDay");

    MenuOfTheDay.findById({_id : req.params.id})
    .populate('pizza')
    .populate('drink')
    .populate('dessert')
    .then((menuOfTheDay) => {
        res.status(200).json(menuOfTheDay);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateMenuOfTheDay(req, res) {

    let MenuOfTheDay = require("../models/menuOfTheDay");

    MenuOfTheDay.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        pizza : req.body.pizza,
        drink : req.body.drink,
        dessert: req.body.dessert}, 
        {new : true})
    .then((updatedMenuOfTheDay) => {
        res.status(200).json(updatedMenuOfTheDay);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteMenuOfTheDay(req, res) {

    let MenuOfTheDay = require("../models/menuOfTheDay");

    MenuOfTheDay.findOneAndRemove({_id : req.params.id})
    .then((deletedMenuOfTheDay) => {
        res.status(200).json(deletedMenuOfTheDay);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 module.exports.deleteMenuOfTheDay = deleteMenuOfTheDay; //
 module.exports.createMenuOfTheDay = createMenuOfTheDay;
 module.exports.readMenusOfTheDay = readMenusOfTheDay;
 module.exports.readMenuOfTheDay = readMenuOfTheDay;
 module.exports.updateMenuOfTheDay = updateMenuOfTheDay;