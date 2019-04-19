// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

var getAllReservationsAtDateAroundTime = function(id, date, time, callback) {
  connection.query(`select * from reservations where restaurantId = ${id} and date = ${date} and time >= ${time-60} and time <= ${time-(-60)}`, function(err, results) {
    callback(err, results);
  });
}

var getTablesOfRestaurant = function(id, callback) {
  connection.query(`select * from tables where restaurantId = ${id}`), function(err, results) {
    callback(err, results);
  }
}

var showAvailableTables = function(id, partySize, date, time, callback) {
  connection.query(`select * from tables where restaurantId = ${id} and maxOccupancy >= ${partySize} and not exists (select * from reservations where restaurantId = ${id} and date = ${date} and time >= ${time-59} and time <= ${time-(-59)} and tableNumber = tables.tableNumber)`, function(err, results) {
    callback(err, results);
  });
}

var addReservation = function(id, tableNumber, date, time, callback) {
  connection.query("insert into reservations (restaurantId, tableNumber, date, time) values (?, ?, ?, ?)", [id, tableNumber, date, time], function(err, results) {
    callback(err, results);
  });
}

var addTable = function(id, tableNumber, maxOccupancy, callback) {
  connection.query("insert into tables (restaurantId, tableNumber, maxOccupancy) values (?, ?, ?)", [id, tableNumber, maxOccupancy], function(err, results) {
    callback(err, results);
  });
}

module.exports = {
  getAllReservationsAtDateAroundTime,
  getTablesOfRestaurant,
  showAvailableTables,
  addReservation,
  addTable
}

