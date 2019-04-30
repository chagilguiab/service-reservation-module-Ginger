const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;

app.use('/:id', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/:id/:partySize/:date/:time', async (req, res) => {
  let slots = [];
  await db.getTimes(req.params.id, req.params.partySize, (item) => {
    let min = parseInt(req.params.time) - 60;
    let max = parseInt(req.params.time) + 60;
    item.forEach(table => {
      table.reservations.forEach(val => {
      for (let i = min; i <= max; i+=15) {
        if(val.date !== req.params.date && val.time !== i && !slots.includes(i)) {
          slots.push(i)
          }
        }
      })
      console.log(table )
    })
      res.send(slots.sort((a, b) => {
      return b - a;
    }))
  })
});

app.post('/:id/:partySize/:date/:time/:table', (req, res) => {
  db.addReservation(req.params.id, req.params.table, req.params.partySize, req.params.date, req.params.time, (item) => {
    console.log(item)
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
