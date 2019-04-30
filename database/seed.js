const fs = require('fs');
const data = require('./data.js');

var writeTables = function () {
  console.time('timing seed');
  var count = 1;
  while (count <= 10) {
    console.log(count)
    fs.writeFileSync(`./database/seed-files/reservations${count}.json`, JSON.stringify(data.generateTables()), function(err){
      if (err) throw err;
      console.log('YAY!')
    });
    count++;
  }
  console.timeEnd('timing seed');
}




writeTables();

