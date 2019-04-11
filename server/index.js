const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));


var showAvailableSlots = function(id, partySize, date, time, firstSlot, lastSlot, slots, res) {
  if (time > lastSlot) {
    res.send(slots);
    return;
  }
  db.showAvailableTables(id, partySize, date, time, function(err, results) {
    if (!err && results.length > 0) {
      showAvailableSlots(id, partySize, date, time - (-15), firstSlot, lastSlot, [time].concat(slots), res);
    } else {
      showAvailableSlots(id, partySize, date, time - (-15), firstSlot, lastSlot, slots, res);
    }
  });
}


app.get('/:id/:partySize/:date/:time', function(req, res) {
  let {id} = req.params;
  let {partySize} = req.params;
  let {date} = req.params;
  let {time} = req.params;
  let firstSlot = time - 30;
  let lastSlot = time - (-30);

  showAvailableSlots(id, partySize, date, firstSlot, firstSlot, lastSlot, [], res);
});

app.get('/:id', function(req, res) {
  const reactPath = path.join(__dirname, '/../client/dist/index.html');
  res.sendFile(reactPath);
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

