//mongo database setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/open_table');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
});

const reservationSchema = new mongoose.Schema({
  restaurantId: Number,
  availTables: [{
    table: {type: Number},
    maxOccupancy: {type: Number}
  }],
  reservations: [{
    table: {type: Number},
    date: {type: String},
    time: {type: Number},
    partySize: {type: Number}
  }]
});

const Reservation = mongoose.model('Reservation', reservationSchema);

const getTimes = (restaurant, size, cb) => {
  return Reservation.findOne({restaurantId: restaurant,  'availTables.maxOccupancy': { $gte: size }}).lean().exec((err, item) => {
    cb(item)
  });
}

const addReservation = (restaurant, size, table, date, time, cb) => {
  Reservation.updateOne({
    restaurantId: restaurant,
    maxOccupancy: size,
    tableNumber: table,
    reservations: [{
      date: date,
      time: time
    }]
  }, (err, item) => {
    console.log(item)
    cb(item)
  })
}

module.exports = {
  Reservation, getTimes, addReservation
};

//postgreSQL database setup
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
