// Access the router on Express 
const router = require('express').Router();

// Access the controllers
const controller = require('../controllers/auth');

const passport = require('passport');

router.post('/signup', function (req, res) {

  controller.signup(req, res);

});

router.post('/signin', function (req, res) {

  controller.signin(req, res);

});

router.post('/signout', function (req, res) {

  controller.signout(req, res);

});

router.get('/profile', passport.authenticate('jwt', { session: false }), function (req, res) { // we protect this route
  console.log("route profile");
  controller.profile(req, res);

});

module.exports = router;