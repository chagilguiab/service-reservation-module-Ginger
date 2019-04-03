const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

var getAllReservationsAtDateAroundTime = function(restaurantId, date, time, callback) {
  console.log(time-(-60));
  connection.query(`select * from reservations where restaurantId = ${restaurantId} and date = ${date} and time >= ${time-60} and time <= ${time-(-60)}`, function(err, results) {
    callback(err, results);
  });
}

var getTablesOfRestaurant = function(restaurantId, callback) {
  connection.query(`select * from tables where restaurantId = ${restaurantId}`), function(err, results) {
    callback(err, results);
  }
}

var showAvailableTables = function(restaurantId, partySize, date, time, callback) {
  connection.query(`select * from tables where restaurantId = ${restaurantId} and maxOccupancy >= ${partySize} and not exists (select * from reservations where restaurantId = ${restaurantId} and date = ${date} and time >= ${time-59} and time <= ${time-(-59)} and tableNumber = tables.tableNumber)`, function(err, results) {
    callback(err, results);
  });
}

var addReservation = function(restaurantId, tableNumber, date, time, callback) {
  connection.query("insert into reservations (restaurantId, tableNumber, date, time) values (?, ?, ?, ?)", [restaurantId, tableNumber, date, time], function(err, results) {
    callback(err, results);
  });
}

var addTable = function(restaurantId, tableNumber, maxOccupancy, callback) {
  connection.query("insert into tables (restaurantId, tableNumber, maxOccupancy) values (?, ?, ?)", [restaurantId, tableNumber, maxOccupancy], function(err, results) {
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

