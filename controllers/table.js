function createTable(req, res){
    let Table = require('../models/table');
    let newTable = Table ({
        name: req.body.name,
        place: req.body.place,
    });
  
    newTable.save()
    .then((savedTable) => {

        res.json(savedTable);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

function readTables(req, res) {

    let Table = require("../models/table");

    Table.find({})
    .then((table) => {
        res.status(200).json(table);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readTable(req, res) {

    let Table = require("../models/table");

    Table.findById({_id : req.params.id})
    .then((table) => {
        res.status(200).json(table);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateTable(req, res) {

    let Table = require("../models/table");

    Table.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name,
        place : req.body.place},
        {new : true})
    .then((updatedTable) => {
        res.status(200).json(updatedTable);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteTable(req, res) {

    let Table = require("../models/table");

    Table.findOneAndRemove({_id : req.params.id})
    .then((deletedTable) => {
        res.status(200).json(deletedTable);
    }, (err) => {
        res.status(500).json(err);
    });
 }


 module.exports.deleteTable = deleteTable;
 module.exports.createTable = createTable;
 module.exports.readTables = readTables;
 module.exports.readTable = readTable;
 module.exports.updateTable = updateTable;
