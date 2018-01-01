const path = require('path');

const rootPath = path.join(__dirname, '../../');
const indexPath = path.join(rootPath, './server/views/index.html');

module.exports = (app) => {
  app.setValue('rootPath', rootPath);
  app.setValue('indexPath', indexPath);
};
