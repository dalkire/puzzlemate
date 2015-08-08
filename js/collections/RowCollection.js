/**
 * Collection of board rows.
 */
var Collection = require('tungstenjs/adaptors/backbone').Collection;
var RowModel = require('../models/RowModel.js');

var Rows = Collection.extend({
  model: RowModel
});

module.exports = Rows;
