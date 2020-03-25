const express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./health.js')(app);

app.get('/', function(req, res) {
  res.send(`Luke come to the dark side of the force.`);
});

module.exports.app = app;



