const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/open_table');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
});

const reservationSchema = new mongoose.Schema({
  restaurantId: Number,
  tableNumber: Number,
  date: String,
  time: Number
});

const tableSchema = new mongoose.Schema({
  restaurantId: Number,
  tableNumber: Number,
  maxOccupancy: Number
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = {
  Reservation, reservationSchema
}
