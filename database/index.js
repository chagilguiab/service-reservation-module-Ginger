const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

var getAllReservationsAtDate = function(restaurantId, date, time, callback) {
  connection.query(`select * from reservations where restaurantId = ${restaurantId} and date = ${date} and time = ${time}`, function(err, results) {
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
  getAllReservationsAtDate,
  addReservation,
  addTable
}

