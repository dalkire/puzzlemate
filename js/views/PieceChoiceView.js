/**
* Single Square View
*/
var View = require('tungstenjs/adaptors/backbone').View;
var PieceChoiceModel = require('../models/PieceChoiceModel');

var PieceChoiceView = View.extend({
  model: new PieceChoiceModel(),
  events: {
    'click .js-piece-choice': 'handleClick'
  },
  handleClick: function () {
    this.model.trigger('selectedPiece', this);
  }
});

module.exports = PieceChoiceView;
