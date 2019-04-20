const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
});

const reservationSchema = new mongoose.Schema({
  restaurantId: Number,
  tableNumber: Number,
  date: Date,
  time: Number
});

const tableSchema = new mongoose.Schema({
  restaurantId: Number,
  tableNumber: Number,
  maxOccupancy: Number
});

console.log(tableSchema)