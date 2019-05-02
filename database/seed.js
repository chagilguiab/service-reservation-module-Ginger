const fs = require('fs');
const data = require('./data.js');

let writeStream = fs.createWriteStream(`./database/seed-files/reservations10.json`);

let generateId = (() => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  }
})();

const createData = () => {
  let arr = [];
  for (let i = 1; i <= 10000; i++) {
    let obj = {};
    obj.restaurantId = generateId();
    obj.availTables = data.generateTables();
    obj.reservations = data.generateReservations();
    arr.push(obj);
  }
  return arr;
}

let writeData = () => {
    for (let i = 0; i < 100; i++) {
      console.log(i)
      createData().forEach(item => {
        writeStream.write(JSON.stringify(item));
      })
    }
  }

writeData();



