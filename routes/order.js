// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/order');


// CREATE
router.post("/order", (req, res) => {

    controller.createOrder(req, res);

});

// READ
router.get("/orders", (req, res) => { // check syntax url
    
    controller.readOrders(req, res);

});

router.get("/order/:id", (req, res) => { // check syntax url
    
    controller.readOrder(req, res);

});

// UPDATE
router.put("/order/:id", (req, res) => {

    controller.updateOrder(req, res);

});


// DELETE
router.delete("/order/:id", (req, res) => {

    controller.deleteOrder(req, res);

});

module.exports = router;