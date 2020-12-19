// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/pizzeria');

//READ
router.get("/", (req, res) => {
    
    controller.readWelcome(req, res);

});

module.exports = router;