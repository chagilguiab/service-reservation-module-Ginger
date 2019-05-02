require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;

app.use('/:id', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/:id/:partySize/:date/:time', (req, res) => {
  db.getTimes(req.params.id, req.params.partySize, (item) => {
    let slots = [];
    let min = parseInt(req.params.time) - 60;
    let max = parseInt(req.params.time) + 60;
    for(let i = min; i <= max; i += 15) {
      slots.push(i);
    }
    if(item && item.availTables.length > 0) {
      res.send(slots.sort((a, b) => {
        return b - a;
      }))
    } else {
      res.send([])
    }
  })
})

app.post('/:id/:partySize/:date/:time/:table', (req, res) => {
  db.addReservation(req.params.id, req.params.table, req.params.partySize, req.params.date, req.params.time, (item) => {
    res.json(item)
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
