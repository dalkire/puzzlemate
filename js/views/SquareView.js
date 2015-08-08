/**
* Single Square View
*/
var View = require('tungstenjs/adaptors/backbone').View;
var SquareModel = require('../models/SquareModel');

var SquareView = View.extend({
  model: new SquareModel(),
  events: {
    'click .js-square-id': 'mouseEnter'
  },
  mouseEnter: function () {
    console.log(this.model.get('id'));
  }
});

module.exports = SquareView;
