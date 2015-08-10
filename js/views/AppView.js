/**
* Todo App Demo for Tungsten.js
*/
'use strict';

var TungstenBackboneBase = require('tungstenjs/adaptors/backbone');
var View = TungstenBackboneBase.View;
var RowView = require('./RowView');
var PieceChoiceView = require('./PieceChoiceView');

var AppView = View.extend({
  childViews: {
    'js-row-view': RowView,
    'js-piece-choice-view': PieceChoiceView
  },
  events: {
    'click .js-clicker': 'clickedMyApp'
  },
  clickedMyApp: function () {
    console.log('clicked');
    this.model.set('name', 'horatio');
    console.log(this.model.get('rows'));
  }
});

module.exports = AppView;
