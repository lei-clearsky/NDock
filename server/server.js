const chalk = require('chalk');
const startDatabase = require('./db');
const app = require('./app');

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(chalk.blue('Server started on port', chalk.magenta(PORT))); // eslint-disable-line no-console
});

startDatabase.then(server).catch((err) => {
  console.error('Initialization error:', chalk.red(err.message)); // eslint-disable-line no-console
  console.error('Process terminating . . .'); // eslint-disable-line no-console
  process.kill(1);
});
