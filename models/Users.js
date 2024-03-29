const mongoose = require('mongoose');
//const Schema = mongoose.Schema
const { Schema } = mongoose;
const Item = require('./Item');
const Address = require('./Address');

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
  submittedItems: [Item],
  address: Address
});

mongoose.model('users', userSchema);
