/**
* Full Chessboard View
*/
var View = require('tungstenjs/adaptors/backbone').View;
var BoardModel = require('../models/BoardModel');

var BoardView = View.extend({
  model: new BoardModel(),
  events: {
    'click .js-modle': 'clickedthis',
    'click .js-bv-header': 'handleHeaderClick'
  },
  clickedthis: function () {
    console.log('clicked js-modle');
    this.model.set('count', 500);
  },
  handleHeaderClick: function () {
    console.log('header click');
  }
});

module.exports = BoardView;
