/**
* Full Chessboard View
*/
var View = require('tungstenjs/adaptors/backbone').View;
var BoardModel = require('../models/BoardModel');

var BoardView = View.extend({
  model: new BoardModel(),
  events: {
    'click .js-modle': 'clickedthis'
  },
  clickedthis: function () {
    this.model.set('modeldata', 'MMMODELTA');
  }
});

module.exports = BoardView;
