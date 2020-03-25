const express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  req.log && req.log.info('HyperDrive needs Repair!');
  res.send(`Fixing the HyperDrive Now!`);
});

module.exports.app = app;



