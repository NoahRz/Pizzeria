// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/pizza');

// CREATE
router.post("/pizza", (req, res) => {

    controller.createPizza(req, res);

});

// READ
router.get("/pizzas", (req, res) => {
    
    controller.readPizzas(req, res);

});

// if we want to find a specific pizza
router.get("/pizza/:id", (req, res) => {
    
    controller.readPizza(req, res);

});

// UPDATE
router.put("/pizza/:id", (req, res) => {
    
    controller.updatePizza(req, res);

});

// DELETE
router.delete("/pizza/:id", (req, res) => {
    
    controller.deletePizza(req, res);

});

module.exports = router;