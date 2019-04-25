const fs = require('fs');
const csv = require('fast-csv');
const data = require('./data.js');

const csvReservations = csv.createWriteStream({ headers: true });
const csvTables = csv.createWriteStream({ headers: true });
const streamReservations = fs.createWriteStream('./database/reservations.csv');
const streamTables = fs.createWriteStream('./database/tables.csv');


csvReservations.pipe(streamReservations);
csvReservations.on('drain', () => {
  writeReservations();
});

csvTables.pipe(streamTables);
csvTables.on('drain', () => {
  writeTables();
});

let reservationCount = 0;
let tableCount = 0;

const writeReservations = () => {
  console.log(reservationCount)
  console.time('timing seed');
  while(reservationCount < 10000000) {
    if(!csvReservations.write(data.generateReservations())) {
      reservationCount++;
      return;
    }
    reservationCount++;
  }
  console.timeEnd('timing seed');
csvReservations.end();
}

const writeTables = () => {
  console.time('timing seed');
  while(tableCount < 100) {
    data.generateTables().forEach(item => {
      if(!csvTables.write(item)) {
        tableCount++;
        return;
      }
      tableCount++;
    })
  }
  console.timeEnd('timing seed');
csvTables.end();
}

writeReservations();
writeTables()

