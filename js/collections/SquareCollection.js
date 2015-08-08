/**
 * Collection of row squares.
 */
var Collection = require('tungstenjs/adaptors/backbone').Collection;
var SquareModel = require('../models/SquareModel.js');

var Squares = Collection.extend({
  model: SquareModel
});

module.exports = Squares;
