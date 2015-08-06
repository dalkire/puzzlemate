var AppView = require('./views/AppView');
var AppModel = require('./models/AppModel');
var template = require('../templates/AppView.mustache');

module.exports = new AppView({
  el: '#appwrapper',
  template: template,
  model: new AppModel(window.data)
});
