const faker = require('faker');
var fs = require('fs');

var generateReservations = function() {
  var reservations = [];
  for (var i = 0; i < 100000; i++) {
    var data = {};
    data.restaurantId = faker.random.number({"min": 1, "max": 100});
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
  for (var restaurantId = 1; restaurantId <= 100; restaurantId++) {
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

fs.writeFile('./database/tables.json', JSON.stringify(generateTables()), function(err){
  if (err) throw err;
  console.log('YAY!')
});

fs.writeFile('./database/reservations.json', JSON.stringify(generateReservations()), function(err){
  if (err) throw err;
  console.log('YAY!')
});





