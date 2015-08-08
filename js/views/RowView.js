/**
 * Full Chessboard View
 */
var View = require('tungstenjs/adaptors/backbone').View;
var RowModel = require('../models/RowModel');
var SquareView = require('../views/SquareView');

var RowView = View.extend({
  model: new RowModel(),
  childViews: {
    'js-square-view': SquareView
  }
});

module.exports = RowView;
