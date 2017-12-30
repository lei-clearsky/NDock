const path = require('path');
const mongoose = require('mongoose');
const chalk = require('chalk');

const { DATABASE_URI } = require(path.join(__dirname, './env'));

const db = mongoose.connect(
  DATABASE_URI,
  {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30,
  },
);

const startDatabasePromise = new Promise((resolve, reject) => {
  db.on('open', resolve);
  db.on('error', reject);
});

console.log(chalk.yellow('Opening connection to MongoDB...')); // eslint-disable-line no-console

startDatabasePromise.then(() => {
  console.log(chalk.green('MongoDB connection opened!')); // eslint-disable-line no-console
});

module.exports = startDatabasePromise;
