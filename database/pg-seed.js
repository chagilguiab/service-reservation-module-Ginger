// import database connection and write copy commands to run from this file
// add script to package.json for running pg:seed command that will copy records into postgres db

// fill out engineering journal!
const path = require('path');
const db = require('../database');
const tablesCsv = path.resolve(__dirname, 'tables.csv');
const reservationsCsv = path.resolve(__dirname, 'reservations.csv');

db.client.query(`COPY tables (restaurantId, tableNumber, maxOccupancy) FROM '${tablesCsv}' DELIMITER ',' CSV Header;`);

db.client.query(`COPY reservations (restaurantId, tableNumber, date, time) FROM '${reservationsCsv}' DELIMITER ',' CSV Header;`);



