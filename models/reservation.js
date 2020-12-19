var mongoose = require('mongoose');

var Schema = mongoose.Schema;
let User = require("./user");
let Table = require("./table");


var ReservationSchema = new Schema({
  user : {
      type: Schema.ObjectId,
      ref: 'User'
  },
  table : {
      type: Schema.ObjectId,
      ref: 'Table'
  },
  date : {
      type: Date // warning : it uses a different time zone
      // default value needed ?
      // format to use : 2020-10-03T01:00:00
  }
});

module.exports = mongoose.model('Reservation', ReservationSchema);