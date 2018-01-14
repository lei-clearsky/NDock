const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  title: String,
});

mongoose.model('Card', CardSchema);

module.exports = mongoose.model('Card');
