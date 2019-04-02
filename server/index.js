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

  db.getAllReservationsAtDate(restaurantId, date, time, function(err, results) {
    if(err) {
      console.log("Can not GET reservations");
      res.send(err);
    } else {
      res.send(results);
    }
  });
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


// app.post('/:id', function(req, res) {
//   var params = [req.body.partySize, req.body.date, req.body.time];
//   db.addReservation(params, function(err, results) {
//     if(err) {
//       console.log("Can not POST reservations");
//       res.send(err);
//     } else {
//       res.send(results);
//     }
//   });
// });