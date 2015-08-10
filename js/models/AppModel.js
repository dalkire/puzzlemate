var Model = require('tungstenjs/adaptors/backbone').Model;
var RowCollection = require('../collections/RowCollection');
var PieceChoiceCollection = require('../collections/PieceChoiceCollection');
var _ = require('underscore');

var AppModel = Model.extend({
  relations: {
    rows: RowCollection,
    pieceChoices: PieceChoiceCollection
  },
  defaults: {
    rows: []
  },
  initialize: function () {
    this.listenTo(this.get('pieceChoices'), 'selectedPiece', this.selectedPiece);
  },
  selectedPiece: function (selectedModel) {
    console.log('selectedModel.id: ', selectedModel.get('id'));

    _.each(this.get('pieceChoices').models, function (pieceChoiceModel) {
      if (pieceChoiceModel.get('id') === selectedModel.get('id')) {
        pieceChoiceModel.set('selected', true);
      } else {
        pieceChoiceModel.set('selected', false);
      }
      console.log(pieceChoiceModel.get('id'));
    });
    // console.log(this.get('pieceChoices'));
    // console.log(selectedModel);
  }
});

module.exports = AppModel;
