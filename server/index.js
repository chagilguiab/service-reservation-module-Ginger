const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));


var showAvailableSlots = function(restaurantId, partySize, date, time, firstSlot, lastSlot, slots, res) {
  if (time > lastSlot) {
    res.send(slots);
    return;
  }
  db.showAvailableTables(restaurantId, partySize, date, time, function(err, results) {
    if (!err && results.length > 0) {
      showAvailableSlots(restaurantId, partySize, date, time - (-15), firstSlot, lastSlot, [time].concat(slots), res);
    } else {
      showAvailableSlots(restaurantId, partySize, date, time - (-15), firstSlot, lastSlot, slots, res);
    }
  });
}

app.get('/:restaurantId/:partySize/:date/:time', function(req, res) {
  let {restaurantId} = req.params;
  let {partySize} = req.params;
  let {date} = req.params;
  let {time} = req.params;
  let firstSlot = time - 30;
  let lastSlot = time - (-30);

  showAvailableSlots(restaurantId, partySize, date, firstSlot, firstSlot, lastSlot, [], res);
});

app.get('/:restaurantId', function(req, res) {
  res.send(req.params.restaurantId);
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

