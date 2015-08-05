var AppView = require('./views/pm_app_view');
var AppModel = require('./models/pm_app_model');
var template = require('../templates/pm_app_view.mustache');

module.exports = new AppView({
  el: '#appwrapper',
  template: template,
  model: new AppModel(window.data),
  dynamicInitialize: true
});
