var Model = require('tungstenjs/adaptors/backbone').Model;
var Squares = require('../collections/Squares');

var Row = Model.extend({
  relations: {
    squares: Squares
  }
});

module.exports = Row;
