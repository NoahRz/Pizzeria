// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/menu');

// CREATE
router.post("/menu", (req, res) => {

    controller.createMenu(req, res);

});

// READ
router.get("/menu/:id", (req, res) => {
    
    controller.readMenu(req, res);

});

router.get("/menus", (req, res) => {
    
    controller.readMenus(req, res);

});

// UPDATE
router.put("/menu/:id", (req, res) => {
    
    controller.updateMenu(req, res);

});

// DELETE
router.delete("/menu/:id", (req, res) => {
    
    controller.deleteMenu(req, res);

});

module.exports = router;