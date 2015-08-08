var Model = require('tungstenjs/adaptors/backbone').Model;
var SquareCollection = require('../collections/SquareCollection');

var Row = Model.extend({
  relations: {
    squares: SquareCollection
  }
});

module.exports = Row;
