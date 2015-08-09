
(function () {
  var rows = [];
  var columns = ['','a','b','c','d','e','f','g','h'];

  for (var i = 8; i >= 1; i--) {
    var row = {
      id: 'row-' + i,
      squares: []
    };


    for (var j = 1; j <= 8; j++) {
      row.squares.push({
        id: columns[j] + i,
        color: (i + j) % 2 == 0 ? 'b' : 'w'
      });
    }

    rows.push(row);
  }

  var data = {
    name: 'David Alkire',
    numRows: 17,
    numCols: 14,
    count: 7,
    rows: rows,
    pieceChoices: [
      {id:'wp'},{id:'wb'},{id:'wn'},{id:'wr'},{id:'wq'},{id:'wk'},
      {id:'bp'},{id:'bb'},{id:'bn'},{id:'br'},{id:'bq'},{id:'bk'}
    ]
  };

  data.pieceChoices[0].selected = true;

  if (typeof window === 'undefined') {
    module.exports = data;
  }
  else {
    window.data = data;
  }
})();
