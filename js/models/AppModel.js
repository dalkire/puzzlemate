var Model = require('tungstenjs/adaptors/backbone').Model;
var RowCollection = require('../collections/RowCollection');
var _ = require('underscore');

var AppModel = Model.extend({
  relations: {
    rows: RowCollection
  },
  initialize: function () {
    this.set('count', 1);
  }
});

module.exports = AppModel;
