// mongo database setup
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/open_table');
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected!')
// });

// const reservationSchema = new mongoose.Schema({
//   restaurantId: Number,
//   tableNumber: Number,
//   date: String,
//   time: Number
// });

// const tableSchema = new mongoose.Schema({
//   restaurantId: Number,
//   tableNumber: Number,
//   maxOccupancy: Number
// });

// const Reservation = mongoose.model('Reservation', reservationSchema);

// module.exports = {
//   Reservation, reservationSchema
// }

// postgreSQL database setup

const { Client } = require('pg');
const client = new Client({
  database: 'open_table'
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

client.query('CREATE TABLE IF NOT EXISTS tables(id SERIAL, restaurantId int NOT NULL, tableNumber int NOT NULL, maxOccupancy int NOT NULL)');

client.query('CREATE TABLE IF NOT EXISTS reservations(id SERIAL, restaurantId int NOT NULL, tableNumber int NOT NULL, date varchar(50) NOT NULL, time int NOT NULL)');


module.exports = { client }
