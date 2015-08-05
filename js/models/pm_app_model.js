var Model = require('tungstenjs/adaptors/backbone').Model;
var BoardModel = require('./BoardModel');
var _ = require('underscore');

var AppModel = Model.extend({
  relations: {
    boardModel: BoardModel
  },
  initialize: function () {
    this.set('count', 1);
  }
});

module.exports = AppModel;
