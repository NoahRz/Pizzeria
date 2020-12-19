const jwt = require('jsonwebtoken');

function createToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, "My so secret sentence", { expiresIn: 3600 });
}

function signup(req, res) {
    let User = require('../models/user');
    let newUser = User({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        order: req.body.order
    });

    newUser.save()
        .then((savedUser) => {
            req.session.email = req.body.email;
            req.session.logged = true;
            res.status(200).json({ token: createToken(savedUser), user: savedUser }); // create token to new user connected

        }, (err) => {
            res.status(400).json(err.message)
        });
}

function signin(req, res) {

    let User = require('../models/user');

    User.findOne({ email: req.body.email })
        .then((user) => {
            if ((user != null) && (user.comparePassword(req.body.password))) {
                req.session.email = req.body.email;
                req.session.logged = true;

                res.status(200).json({ token: createToken(user), user: user }); // create token to new user connected
            }
            else {
                res.status(400).json({ msg: "Invalid credentials" })
                //res.redirect('/api/v1/'); // or return an error message
            }
        }, (err) => {
            res.status(500).json(err);
        });
}

function signout(req, res) {

    req.session.username = "";
    req.session.logged = false;
    res.redirect('/api/v1/');

}

function profile(req, res) {

    let User = require('../models/user');
    if (req.session.logged) {

        res.send("Profile");
    }
    else {
        res.status(400).json({ msg: "Please sign in" })
    }

}

module.exports.signup = signup;
module.exports.signin = signin;
module.exports.signout = signout;
module.exports.profile = profile;