/* eslint no-param-reassign: 0, global-require: 0 */
module.exports = (app) => {
  app.setValue = app.set.bind(app);

  app.getValue = path => app.get(path);

  require('./app-variables')(app);
};
