// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/menuOfTheDay');


// CREATE
router.post("/menuoftheday", (req, res) => {

    controller.createMenuOfTheDay(req, res);

});

// READ
router.get("/menusoftheday", (req, res) => { // check syntax url
    
    controller.readMenusOfTheDay(req, res);

});

router.get("/menuoftheday/:id", (req, res) => {
    
    controller.readMenuOfTheDay(req, res);

});

// UODATE
router.put("/menuoftheday/:id", (req, res) => {

    controller.updateMenuOfTheDay(req, res);

});

// DELETE
router.delete("/menuoftheday/:id", (req, res) => {

    controller.deleteMenuOfTheDay(req, res);

});

module.exports = router;