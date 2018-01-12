const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
  name: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String
});

mongoose.model('Address', addressSchema);
