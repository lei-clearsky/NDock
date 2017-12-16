var path = require('path');
var rootPath = path.join(__dirname, '../../');
var indexPath = path.join(rootPath, './server/views/index.html')

module.exports = function(app) {
	app.setValue('rootPath', rootPath);
	app.setValue('indexPath', indexPath);
};
