var path = require('path');
var express = require('express');
var app = express();

module.exports = app;

require('./config')(app);

app.use('/api/', require('./routes'));

app.get('/*', function(req, res) {
  res.sendFile(app.get('indexPath'));
});
