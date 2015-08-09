/**
* Todo App Demo for Tungsten.js
*/
'use strict';

var TungstenBackboneBase = require('tungstenjs/adaptors/backbone');
var View = TungstenBackboneBase.View;
var RowView = require('./RowView');

var AppView = View.extend({
  childViews: {
    'js-row-view': RowView
  },
  events: {
    'click .js-clicker': 'clickedMyApp'
  },
  clickedMyApp: function () {
//     console.log('clicked');
// console.log(this);
//     this.model.set('name', 'horatio');
  }
});

module.exports = AppView;
