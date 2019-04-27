const faker = require('faker');
var fs = require('fs');

var generateReservations = function() {
    var data = {};
    data.restaurantId = faker.random.number({"min": 1, "max": 10000});
    data.tableNumber = faker.random.number({"min": 1, "max": 4});
    data.date = faker.date.between('2019-05-01', '2019-12-01').toISOString().slice(0, 10);
    data.time = faker.random.objectElement({10: 600, 1030: 630, 11: 660, 1130: 690, 12: 720, 1230: 750, 1: 780, 130: 810, 2: 840, 230: 870, 3: 900, 330: 930, 4: 960, 430: 990, 5: 1020, 530: 1050, 6: 1080, 630: 1110, 7: 1140, 730: 1170, 8: 1200, 830: 1230, 9: 1260, 930: 1290, 10: 1320, 1030: 1350, 11: 1380, 1130: 1410
    });
  return data;
}

var generateTables = function() {
  var tables = [];
  for (var restaurantId = 1; restaurantId <= 10000; restaurantId++) {
    for (var i = 1; i <= 4; i++) {
      for (var j = 600; j <= 1410; j+= 30) {
        var data = {};
        data.restaurantId = restaurantId;
        data.maxOccupancy = faker.random.objectElement({two: 2, four: 4, six: 6, eight: 8});
        data.tableNumber = i;
        data.time = j;
        data.available = true;
        tables.push(data);
      }
    }
  }
  return tables;
}

module.exports = {
  generateReservations, generateTables
}
