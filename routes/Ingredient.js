// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/ingredient');

// CREATE
router.post("/ingredient", (req, res) => {

    controller.createIngredient(req, res);

});

// READ
router.get("/ingredients", (req, res) => { // check syntax url
    
    controller.readIngredients(req, res);

});

router.get("/ingredient/:id", (req, res) => {
    
    controller.readIngredient(req, res);

});

// UPDATE
router.put("/ingredient/:id", (req, res) => {

    controller.updateIngredient(req, res);

});

// DELETE
router.delete("/ingredient/:id", (req, res) => {

    controller.deleteIngredient(req, res);

});

module.exports = router;