const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const router = express.Router();


router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.use('/:restaurantId', express.static(path.join(__dirname, '/../client/dist')));

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

router.get('/:restaurantId/:partySize/:date/:time', function(req, res) {
  let {restaurantId} = req.params;
  let {partySize} = req.params;
  let {date} = req.params;
  let {time} = req.params;
  let firstSlot = time - 30;
  let lastSlot = time - (-30);

  showAvailableSlots(restaurantId, partySize, date, firstSlot, firstSlot, lastSlot, [], res);
});

router.get('*', (req, res) => {
  res.status(404).send('Invalid Restaurant ID');
});

module.exports = router;