const mongoose = require('mongoose');
const { Schema } = mongoose;

const offerSchema = new Schema({
  _offerTo: { type: Schema.Types.ObjectId, ref: 'User' },
  _offerFrom: { type: Schema.Types.ObjectId, ref: 'User' },
  _itemOffered: { type: Schema.Types.ObjectId, ref: 'Item' },
  _itemWated: { type: Schema.Types.ObjectId, ref: 'Item' },
  accepted: { type: Boolean, default: false },
  dateAccepted: Date
});

module.exports = offerSchema;
