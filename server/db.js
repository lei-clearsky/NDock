var path = require('path');
var mongoose = require('mongoose');
var chalk = require('chalk');
var DATABASE_URI = require(path.join(__dirname, './env')).DATABASE_URI;
var db = mongoose.connect(
      DATABASE_URI,
      {
        useMongoClient: true,
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30,
      },
    );

var startDatabasePromise = new Promise((resolve, reject) => {
                             db.on('open', resolve)
                             db.on('error', reject)
                           });

console.log(chalk.yellow('Opening connection to MongoDB...'));

startDatabasePromise.then(function() {
	console.log(chalk.green('MongoDB connection opened!'));
});

module.exports = startDatabasePromise;
