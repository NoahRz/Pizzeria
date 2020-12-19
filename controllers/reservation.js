
function createReservation(req, res){
    let Reservation = require('../models/reservation');
    let newReservation = Reservation ({
        client: req.body.client,
        table: req.body.table,
        date: req.body.date
    });
  
    newReservation.save()
    .then((savedReservation) => {

        res.json(savedReservation);
            
    }, (err) => {
        res.status(400).json(err)
    });
}


function readReservations(req, res) {

    let Reservation = require("../models/reservation");

    Reservation.find({})
    .populate('client')
    .populate('table')
    .then((reservation) => {
        res.status(200).json(reservation);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readReservation(req, res) {

    let Reservation = require("../models/reservation");

    Reservation.findById({_id : req.params.id})
    .populate('client')
    .populate('table')
    .then((reservation) => {
        res.status(200).json(reservation);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateReservation(req, res) {

    let Reservation = require("../models/reservation");

    Reservation.findByIdAndUpdate({_id: req.params.id}, 
        {client : req.body.client,
        table : req.body.table,
        date : req.body.date},
        {new : true})
    .then((updatedReservation) => {
        res.status(200).json(updatedReservation);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteReservation(req, res) {

    let Reservation = require("../models/reservation");

    Reservation.findOneAndRemove({_id : req.params.id})
    .then((deletedReservation) => {
        res.status(200).json(deletedReservation);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 module.exports.deleteReservation = deleteReservation;
 module.exports.createReservation = createReservation;
 module.exports.readReservations = readReservations;
 module.exports.readReservation = readReservation;
 module.exports.updateReservation = updateReservation;
