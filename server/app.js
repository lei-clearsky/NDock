var path = require('path');
var express = require('express');
var app = express();

module.exports = app;

require('./config')(app);

app.use('/api/', require('./routes'));

// Static files
var root = app.getValue('rootPath');
var publicPath = path.join(root);
app.use(express.static(publicPath));

app.get('/*', function(req, res) {
  res.sendFile(app.get('indexPath'));
});
