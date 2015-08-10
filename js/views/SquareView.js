/**
* Single Square View
*/
var View = require('tungstenjs/adaptors/backbone').View;
var SquareModel = require('../models/SquareModel');

var SquareView = View.extend({
  model: new SquareModel(),
  events: {
    'click .js-square': 'clickedSquare'
  },
  clickedSquare: function () {
    var selectedPiece = this.model.collection.parent.collection.parent.get('selectedPiece');

    if (this.model.get('piece') === selectedPiece) {
      this.model.set('piece', '');
    } else {
      this.model.set('piece', selectedPiece);
    }
  }
});

module.exports = SquareView;
