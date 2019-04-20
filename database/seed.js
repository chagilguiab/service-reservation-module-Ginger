const faker = require('faker');
const fs = require('fs');

var generateReservations = function() {
  var reservations = [];
  for (var i = 0; i < 1000000; i++) {
    var data = {};
    data.restaurantId = faker.random.number({"min": 1, "max": 100000});
    data.tableNumber = faker.random.number({"min": 1, "max": 4});
    data.date = faker.date.between('2019-05-01', '2019-12-01').toISOString().slice(0, 10);
    data.time = faker.random.objectElement({tenAm: 600, onePm: 780, twoPm: 840, fourPm: 960, sixPm: 1080, sevenPm: 1140, eightPm: 1200
    });
    reservations.push(data);
  }
  return reservations;
}

var generateTables = function() {
  var tables = [];
  for (var restaurantId = 1; restaurantId <= 100000; restaurantId++) {
    var tableNumber = 1;
    for (var i = 1; i <= 4; i++) {
      var data = {};
      data.restaurantId = restaurantId;
      data.maxOccupancy = faker.random.objectElement({two: 2, four: 4, six: 6, eight: 8});
      data.tableNumber = tableNumber;
      tables.push(data);
      tableNumber += 1;
    }
  }
  return tables;
}

var writeReservations = function() {
  console.time('timing seed');
  var count = 1;
  while (count <= 10) {
    fs.writeFile(`./database/reservations-${count}.json`, JSON.stringify(generateReservations()), function(err){
      if (err) throw err;
      console.log('YAY!')
    });
    count++;
  }
  console.timeEnd('timing seed');
}

var writeTables = function () {
  console.time('timing seed');
  var count = 1;
  while (count <= 10) {
    fs.writeFile(`./database/tables${count}.json`, JSON.stringify(generateTables()), function(err){
      if (err) throw err;
      console.log('YAY!')
    });
    count++;
  }
  console.timeEnd('timing seed');
}



writeReservations();
writeTables();



