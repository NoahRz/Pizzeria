const express = require('express');

require('dotenv').config();

const chalk = require('chalk');

//to access form data
let bodyParser = require('body-parser');

//used to reduce response body
let compression = require('compression');

//The 404 middleware used when an incoming request
//hits a wrong route
const http404 = require('./middleware/route404');

//Access the path 
const path = require('path');

//Used for logging
const morgan = require("morgan");

//Add more logging
const { loggers, transports, format } = require("winston");

//Accessing MongoDB
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

//session allows to store data such as user data
const session = require('express-session');

//sessions are stored into MongoDB
const MongoStore = require('connect-mongo')(session);

const cors = require("cors")

//Create an application 
const app = express();

//Used for Jsonwebtoken (in login)
const passport = require('passport'); // maybe allow user to connect with facbook or google (later)
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//Use the morgan logging 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


//Define the loggers for Winston
loggers.add('infoLogger', {
  level: 'info',
  transports: [new transports.File({ filename: path.join(__dirname, 'logs/info.log') })],
  format: format.printf((info) => {
    let message = `${new Date(Date.now()).toUTCString()} | ${info.level.toUpperCase()}  | ${info.message}`
    return message
  })
});

loggers.add('errorLogger', {
  level: 'error',
  transports: [new transports.File({ filename: path.join(__dirname, 'logs/error.log') })],
  format: format.printf((info) => {
    let message = `${new Date(Date.now()).toUTCString()} | ${info.level.toUpperCase()}  | ${info.message}`
    return message
  })
});

const infoLogger = loggers.get('infoLogger');

//Connecting to MongoDB (async/await approach)
const connectDb = async () => {
  await mongoose.connect('mongodb://localhost:27017/pizzeria', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
    () => { //  mongodb://localhost:27017 c'est l'adresse du serveur mongo dans mon local et pizzaria est le repertoire de mon projet dans mon serveur local ( si le repertoire pizza n'existe pas, il va le créer lui même)
      console.log(chalk.green(`Connected to database`))
      infoLogger.info("Connected to database");
    },
    error => {
      console.error(chalk.red(`Connection error: ${error.stack}`))
      process.exit(1)
    }
  )
}

connectDb().catch(error => console.error(error))

// Passport Setup
const User = require('./models/user');

//setting session
app.use(session({

  resave: true,
  saveUninitialized: true,
  secret: 'myVerySecretKey', //dotenv ?
  store: new MongoStore({ url: 'mongodb://localhost:27017/auth', autoReconnect: true })

}));

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "My so secret sentence";

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  User.findById(jwt_payload.id)
    .then((user) => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }, (err) => {
      return done(err, false);
    });
}));

app.use(passport.initialize());

//compress response body for better performance
app.use(compression());

//disable headers indicating pages are coming from an Express server
app.disable('x-powered-by');

//  helmet for more security ? -> const helmet = require("helmet"); app.use("helmet")

//used to fetch the data from forms on HTTP POST, and PUT
app.use(bodyParser.urlencoded({

  extended: true

}));

app.use(bodyParser.json());

app.use(cors());

//Accessing the routes for the user
const pizzeriaRoutes = require('./routes/pizzeria');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const dessertRoutes = require('./routes/dessert');
const drinkRoutes = require('./routes/drink');
const ingredientRoutes = require('./routes/ingredient');
const menuRoutes = require('./routes/menu');
const menuOfTheDayRoutes = require('./routes/menuOfTheDay');
const orderRoutes = require('./routes/order');
const pizzaRoutes = require('./routes/pizza');
const reservationRoutes = require('./routes/reservation');
const tableRoutes = require('./routes/table');

//Acces the routes 
app.use('/api/v1/', pizzeriaRoutes);
app.use('/api/v1/', authRoutes);
app.use('/api/v1/', userRoutes);
app.use('/api/v1/', dessertRoutes);
app.use('/api/v1/', drinkRoutes);
app.use('/api/v1/', ingredientRoutes);
app.use('/api/v1/', menuRoutes);
app.use('/api/v1/', menuOfTheDayRoutes);
app.use('/api/v1/', orderRoutes);
app.use('/api/v1/', pizzaRoutes);
app.use('/api/v1/', reservationRoutes);
app.use('/api/v1/', tableRoutes);


//When there is no route that caught the incoming request
//use the 404 middleware
app.use(http404.notFound);

//Listen on the port 3000
app.listen(3000, () => {
  //Add info to the loggers
  infoLogger.info('Server is running on port: 3000');

});

//Print out where the server is
console.log(chalk.green("Server is running on port: 3000"));