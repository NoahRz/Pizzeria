function createMenu(req, res){
    let Menu = require('../models/menu');
    let newMenu = Menu ({
        name: req.body.name,
        pizzas: req.body.pizzas,
        drinks : req.body.drinks,
        desserts : req.body.desserts,
    });
  
    newMenu.save()
    .then((savedMenu) => {

        res.json(savedMenu);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

function readMenus(req, res) {

    let Menu = require("../models/menu");

    Menu.find({})
    .populate('pizzas')
    .populate('drinks')
    .populate('desserts')
    .then((pizzas) => {
        res.status(200).json(pizzas);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readMenu(req, res) {

    let Menu = require("../models/menu");

    Menu.findById({_id : req.params.id})
    .populate('pizzas')
    .populate('drinks')
    .populate('desserts')
    .then((menu) => {
        res.status(200).json(menu);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateMenu(req, res) {

    let Menu = require("../models/menu");

    Menu.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        pizzas : req.body.pizzas,
        drinks : req.body.drinks,
        desserts: req.body.desserts}, 
        {new : true})
    .then((updatedMenu) => {
        res.status(200).json(updatedMenu);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteMenu(req, res) {

    let Menu = require("../models/menu");

    Menu.findOneAndRemove({_id : req.params.id})
    .then((deletedMenu) => {
        res.status(200).json(deletedMenu);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 module.exports.deleteMenu = deleteMenu; //
 module.exports.createMenu = createMenu;
 module.exports.readMenus = readMenus;
 module.exports.readMenu = readMenu;
 module.exports.updateMenu = updateMenu;
