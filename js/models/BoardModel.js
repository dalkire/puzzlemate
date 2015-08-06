var Model = require('tungstenjs/adaptors/backbone').Model;
var Rows = require('../collections/Rows');
// var _ = require('underscore');

var BoardModel = Model.extend({
  relations: {
    rows: Rows
  },
  setCount: function (n) {
    this.set('count', n);
  }
  // initialize: function () {
  //   this.board = this.initBoard();
  //   this.printSquares();
  //   this.modeldata = 'inmodel';
  // },
  // initBoard: function () {
  //   var board = [[],[],[],[],[],[],[],[]];
  //   var columns = ['a','b','c','d','e','f','g','h'];

  //   for (var i = 0; i < 8; i++) {
  //     for (var j = 0; j < 8; j++) {
  //       board[i][j] = new SquareModel({
  //         id: columns[j] + (i + 1)
  //       });
  //     }
  //   }

  //   return board;
  // },
  // printSquares: function () {
  //   _.each(this.board, function (row) {
  //     _.each(row, function (square) {
  //       // console.log(square.get('id'));
  //     });
  //   });
  // }
});

module.exports = BoardModel;
