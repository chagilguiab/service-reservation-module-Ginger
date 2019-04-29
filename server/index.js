const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');
const app = express();
// const table = require('../server/controllers/table.js')

const port = process.env.PORT || 3001;

app.use('/:id', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/:id/:partySize/:date/:time', async (req, res) => {
  let slots = [];
  await db.getReservations(req.params.id, req.params.date, (item) => {
    item.forEach(reservation => {
      slots.push(reservation.time)
    })
  });

  db.getTimes(req.params.id, req.params.partySize, async (tables) => {
    let times = [];
    let time = parseInt(req.params.time);
    let min = time - 60;
    let max = time + 60;
    if(tables.length > 0) {
      for (let i = min; i <= max; i+=15) {
        if(!slots.includes(i)) {
          times.push(i)
        }
      }
      let sorted = times.sort((a, b) => {
        return b - a;
      })
      res.send(sorted);
    } else {
      res.send([])
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
