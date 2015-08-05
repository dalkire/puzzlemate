var Model = require('tungstenjs/adaptors/backbone').Model;
var _ = require('underscore');

var AppModel = Model.extend({
  initialize: function () {
    this.set('name', 'Replaced Name');
  }
});

module.exports = AppModel;
