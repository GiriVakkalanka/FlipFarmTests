const mongoose = require('mongoose');
const { Schema } = mongoose;

const offerSchema = new Schema({
  _itemOffered = { type: Schema.Types.ObjectId, ref: 'Item'},
  _itemWated = { type: Schema.Types.ObjectId, ref: 'Item'},
  accepted: { type: Boolean, default: false }
});

modeule.exports = offerSchema;
