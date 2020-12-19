// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/reservation');

router.post("/reservation", (req, res) => {

    controller.createReservation(req, res);

});

router.get("/reservations", (req, res) => { // check syntax url
    
    controller.readReservations(req, res);

});

router.get("/reservation/:id", (req, res) => { // check syntax url
    
    controller.readReservation(req, res);

});


router.put("/reservation/:id", (req, res) => {

    controller.updateReservation(req, res);

});


router.delete("/reservation/:id", (req, res) => {

    controller.deleteReservation(req, res);

});

module.exports = router;