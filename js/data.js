
(function () {
  var data = {
    name: 'David Alkire',
    numRows: 17,
    numCols: 14,
    count: 7
  };

  if (typeof window === 'undefined') {
    module.exports = data;
  }
  else {
    window.data = data;
  }
})();
