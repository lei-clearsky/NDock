/* eslint import/no-dynamic-require: 0, global-require: 0 */
const path = require('path');

const devConfigPath = path.join(__dirname, './development.js');
const productionConfigPath = path.join(__dirname, './production.js');

if (process.env.NODE_ENV === 'production') {
  module.exports = require(productionConfigPath);
} else {
  module.exports = require(devConfigPath);
}
