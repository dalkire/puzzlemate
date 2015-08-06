/**
* Todo App Demo for Tungsten.js
*/
'use strict';

var TungstenBackboneBase = require('tungstenjs/adaptors/backbone');
var View = TungstenBackboneBase.View;
var BoardView = require('./BoardView');

var AppView = View.extend({
  childViews: {
    'js-board-view': BoardView
  },
  events: {
    'click .js-clicker': 'clickedMyApp'
  },
  clickedMyApp: function () {
    console.log('clicked');
console.log(this);
    this.model.set('name', 'horatio');
  }
});

module.exports = AppView;
