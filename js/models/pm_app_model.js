/**
 * Todo App Demo for Tungsten.js
 */
'use strict';

var TungstenBackboneBase = require('tungstenjs/adaptors/backbone');

var Model = TungstenBackboneBase.Model;
var AppModel = Model.extend({
  initialize: function () {
    this.set('name', 'Replaced Name');
  }
});

module.exports = AppModel;
