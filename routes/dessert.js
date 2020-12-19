// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/dessert');

// CREATE
router.post("/dessert", (req, res) => {

    controller.createDessert(req, res);

});
// READ
router.get("/desserts", (req, res) => { 
    
    controller.readDesserts(req, res);

});

router.get("/dessert/:id", (req, res) => {
    
    controller.readDessert(req, res);

});

// UPDATE
router.put("/dessert/:id", (req, res) => {

    controller.updateDessert(req, res);

});

// DELETE
router.delete("/dessert/:id", (req, res) => {

    controller.deleteDessert(req, res);

});

module.exports = router;