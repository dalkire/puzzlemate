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
    console.log(this.model.get('id'));
    this.model.set('piece', 'bp');
  }
});

module.exports = SquareView;
