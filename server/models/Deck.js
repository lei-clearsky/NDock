const mongoose = require('mongoose');

const DeckSchema = new mongoose.Schema({
  title: String,
  cards: [],
});

mongoose.model('Deck', DeckSchema);

module.exports = mongoose.model('Deck');
