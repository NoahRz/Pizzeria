// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/table');

// CREATE
router.post("/table", (req, res) => {

    controller.createTable(req, res);

});

// READ
router.get("/tables", (req, res) => { // check syntax url
    
    controller.readTables(req, res);

});

router.get("/table/:id", (req, res) => { // check syntax url
    
    controller.readTable(req, res);

});

// UPDATE
router.put("/table/:id", (req, res) => {

    controller.updateTable(req, res);

});

// DELETE
router.delete("/table/:id", (req, res) => {

    controller.deleteTable(req, res);

});

module.exports = router;

