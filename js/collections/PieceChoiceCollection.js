/**
 * Collection of row squares.
 */
var Collection = require('tungstenjs/adaptors/backbone').Collection;
var PieceChoiceModel = require('../models/PieceChoiceModel.js');

var PieceChoices = Collection.extend({
  model: PieceChoiceModel
});

module.exports = PieceChoices;
