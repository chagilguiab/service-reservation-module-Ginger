const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));


var showAvailableSlots = function(restaurantId, partySize, date, time, firstSlot, lastSlot, slots, res) {
  if (time > lastSlot) {
    res.send(slots);
  }
  db.showAvailableTables(restaurantId, partySize, date, time, function(err, results) {
    console.log(slots, restaurantId, partySize, date, time, firstSlot, lastSlot);
    if (!err && results.length > 0) {
      showAvailableSlots(restaurantId, partySize, date, time - (-15), firstSlot, lastSlot, [time].concat(slots), res);
    } else {
      showAvailableSlots(restaurantId, partySize, date, time - (-15), firstSlot, lastSlot, slots, res);
    }
  });
}

app.get('/api/restaurants/:restaurantId/:partySize/:date/:time', function(req, res) {
  let {restaurantId} = req.params;
  let {partySize} = req.params;
  let {date} = req.params;
  let {time} = req.params;
  let firstSlot = time - 30;
  let lastSlot = time - (-30);

  showAvailableSlots(restaurantId, partySize, date, firstSlot, firstSlot, lastSlot, [], res);
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


// app.get('/api/restaurants/:restaurantId/:partySize/:date/:time', function(req, res) {
//   let {restaurantId} = req.params;
//   let {partySize} = req.params;
//   let {date} = req.params;
//   let {time} = req.params;

//   db.getAllReservationsAtDateAroundTime(restaurantId, date, time, function(err, results) {
//     if(err) {
//       console.log("Can not GET reservations");
//       res.send(err);
//     } else {
//       res.send(results);
//     }
//   });
// });