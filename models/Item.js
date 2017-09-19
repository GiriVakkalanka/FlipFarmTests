const mongoose = require('mongoose');
const { Schema } = mongoose;
const OfferSchema = require('./Offer');

const itemSchema = new Schema({
  name: String,
  description: String,
  picture: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date,
  offers: [OfferSchema]
});

mongoose.model('item', itemSchema);
