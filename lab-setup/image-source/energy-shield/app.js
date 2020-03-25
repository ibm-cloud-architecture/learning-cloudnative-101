const express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./health.js')(app);

app.get('/', function(req, res) {
  req.log && req.log.info('this is a log message for kubecon')
  res.send(`Hello ${process.env.TARGET || "World"}`)
});

module.exports.app = app;



