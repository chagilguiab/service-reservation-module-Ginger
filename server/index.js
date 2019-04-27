const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/:id', function(req, res) {
  const reactPath = path.join(__dirname, '/../client/dist/index.html');
  res.sendFile(reactPath);
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
