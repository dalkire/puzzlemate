/**
* Full Chessboard View
*/
'use strict';

var TungstenBackboneBase = require('tungstenjs/adaptors/backbone');
var View = TungstenBackboneBase.View;

var BoardView = View.extend({
  events: {
    // 'click .js-clicker': 'clickedMyApp'
  }
});

module.exports = BoardView;
