const path = require('path');
const express = require('express');

const app = express();

module.exports = app;

require('./config')(app);

app.use('/api/', require('./routes'));

// Static files
const root = app.getValue('rootPath');
const publicPath = path.join(root);
app.use(express.static(publicPath));

app.get('/*', (req, res) => {
  res.sendFile(app.get('indexPath'));
});
