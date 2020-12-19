function createOrder(req, res) {
    let Order = require('../models/order');
    let newOrder = Order({
        pizzas: req.body.pizzas,
        desserts: req.body.desserts,
        drinks: req.body.drinks,
        orderDate: req.body.orderDate,
        state: req.body.state,
        takeaway: req.body.takeaway,
    });

    newOrder.save()
        .then((savedOrder) => {

            res.json({ _id: savedOrder._id });

        }, (err) => {
            res.status(400).json(err)
        });
}

function readOrders(req, res) {

    let Order = require("../models/order");
    console.log("orders");

    Order.find({})
        .populate('pizzas')
        .populate('desserts')
        .populate('drinks')
        .then((order) => {
            res.status(200).json(order);
        }, (err) => {
            res.status(500).json(err);
        });
}

function readOrder(req, res) {

    let Order = require("../models/order");

    Order.findById({ _id: req.params.id })
        .populate('pizzas')
        .populate('desserts')
        .populate('drinks')
        .then((order) => {
            res.status(200).json(order);
        }, (err) => {
            console.log("une erreur");
            res.status(500).json(err);
        });
}

function updateOrder(req, res) {

    let Order = require("../models/order");

    Order.findByIdAndUpdate({ _id: req.params.id },
        {
            pizzas: req.body.pizzas,
            desserts: req.body.desserts,
            drinks: req.body.drinks,
            orderDate: req.body.orderDate,
            state: req.body.state,
            takeaway: req.body.takeaway
        },
        { new: true })
        .then((updatedOrder) => {
            res.status(200).json(updatedOrder);
        }, (err) => {
            res.status(500).json(err);
        });
}

function deleteOrder(req, res) {

    let Order = require("../models/order");

    Order.findOneAndRemove({ _id: req.params.id })
        .then((deletedOrder) => {
            res.status(200).json(deletedOrder);
        }, (err) => {
            res.status(500).json(err);
        });
}

module.exports.deleteOrder = deleteOrder;
module.exports.createOrder = createOrder;
module.exports.readOrders = readOrders;
module.exports.readOrder = readOrder;
module.exports.updateOrder = updateOrder;
