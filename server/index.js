const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/restaurants/:restaurantId/:date/:time', function(req, res) {
  let {restaurantId} = req.params;
  let {date} = req.params;
  let {time} = req.params;

  db.getAllReservationsAtDateAroundTime(restaurantId, date, time, function(err, results) {
    if(err) {
      console.log("Can not GET reservations");
      res.send(err);
    } else {
      console.log("matrix", showTableInfoMatrix(restaurantId, date, time));
      res.send(results);
    }
  });
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

////////////////////////////////////////////////////////////////////////////////////////////////////

var showTableInfoMatrix = (restaurantId, date, time) => {

  var tableInfoMatrix = [];
  console.log("emptymatrix", tableInfoMatrix);

  db.getTablesOfRestaurant(restaurantId, function(err, results) {
    if(err) {
      console.log("Can not GET tables of restaurant");
      res.send(err);
    } else {
      console.log("results", results);
      var tableInfo = [];
      var numberOfTable = results.length;
      for (var i = 0; i < numberOfTable; i++) {
        tableInfo.push(['available', results[i][maxxOccupancy]]);
      }
      for (var i = 0; i <= 8; i++) {
        tableInfoMatrix.push(tableInfo);
      }
      console.log("availablematrix", tableInfoMatrix);
      db.getAllReservationsAtDateAroundTime(restaurantId, date, time, function(err, results) {
        if(err) {
          console.log("Can not GET reservations");
          res.send(err);
        } else {
          var selectedTime = time;
          var timeDelta = -60;
          var n = 0;
          var numberOfReservations = results.length;
          while (timeDelta <= 60 && n <= 9) {
            for (var i = 0; i < numberOfReservations; i++) {
              if (results[i].time = selectedTime + timeDelta) {
                tableInfoMatrix[n][results[i][tableNumber - 1][0]] = 'reserved';
              }
            }
            timeDelta += 15;
            n += 1;
          }
        }
      });
    }
    return tableInfoMatrix;
  });
}