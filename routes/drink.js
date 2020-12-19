// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/drink');

// CREATE
router.post("/drink", (req, res) => {

    controller.createDrink(req, res);

});

// READ
router.get("/drinks", (req, res) => { // check syntax url
    
    controller.readDrinks(req, res);

});

router.get("/drink/:id", (req, res) => {
    
    controller.readDrink(req, res);

});

// UPDATE
router.put("/drink/:id", (req, res) => {

    controller.updateDrink(req, res);

});

// DELETE
router.delete("/drink/:id", (req, res) => {

    controller.deleteDrink(req, res);

});

module.exports = router;