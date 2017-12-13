var chalk = require('chalk');

var startDatabase = require('./db');

var app = require('./app');

var PORT = process.env.PORT || 1337;

var server = app.listen(PORT, function() {
	console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
});

startDatabase.then(server).catch(function (err) {
    console.error('Initialization error:', chalk.red(err.message));
    console.error('Process terminating . . .');
    process.kill(1);
});