var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var depositSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

var Deposit = mongoose.model('Deposit', depositSchema);
module.exports = Deposit;
