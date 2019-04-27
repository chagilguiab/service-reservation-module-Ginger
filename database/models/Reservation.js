const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  restaurantId: Number,
  tableNumber: Number,
  date: String,
  time: Number
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = {
  Reservation
}
