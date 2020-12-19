function readUsers(req, res) {

    let User = require("../models/user");

    User.find({})
        .populate('order')
        .then((user) => {
            res.status(200).json(user);
        }, (err) => {
            res.status(500).json(err);
        });
}

function readUser(req, res) {

    let User = require("../models/user");

    User.findById({ _id: req.params.id })
        .then((user) => {
            res.status(200).json(user);
        }, (err) => {
            res.status(500).json(err);
        });
}


function updateUser(req, res) {

    let User = require("../models/user");

    User.findByIdAndUpdate({ _id: req.params.id },
        {
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            order: req.body.order
        },
        { new: true })
        .then((updatedUser) => {
            res.status(200).json(updatedUser);
        }, (err) => {
            res.status(500).json(err);
        });
}

function updateOrder(req, res) {

    let User = require("../models/user");

    User.findByIdAndUpdate({ _id: req.params.id },
        { $push: { order: req.body.order } },
        { new: true })
        .then((updatedUser) => {
            res.status(200).json(updatedUser);
        }, (err) => {
            res.status(500).json(err);
        });
}


function deleteUser(req, res) {

    let User = require("../models/user");

    User.findOneAndRemove({ _id: req.params.id })
        .then((deletedUser) => {
            res.status(200).json(deletedUser);
        }, (err) => {
            res.status(500).json(err);
        });
}

module.exports.deleteUser = deleteUser;
module.exports.readUsers = readUsers;
module.exports.readUser = readUser;
module.exports.updateUser = updateUser;
module.exports.updateOrder = updateOrder;