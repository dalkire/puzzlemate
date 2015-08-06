/**
 * Full Chessboard View
 */
var View = require('tungstenjs/adaptors/backbone').View;
var RowModel = require('../models/RowModel');
var SquareView = require('../views/SquareView');

var RowView = View.extend({
  childViews: {
    'js-square-view': SquareView
  },
  model: new RowModel()
});

module.exports = RowView;
