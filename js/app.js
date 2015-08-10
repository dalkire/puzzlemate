var AppView = require('./views/AppView');
var AppModel = require('./models/AppModel');
var template = require('../templates/AppView.mustache');
console.log('REQUIRE FROM MUSTACHE: ', template);
module.exports = new AppView({
  el: '#app-wrapper',
  template: template,
  model: new AppModel(window.data)
});
