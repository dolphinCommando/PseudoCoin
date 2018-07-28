var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cashSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  }
})

var Cash = mongoose.model('Cash', cashSchema);

module.exports = Cash;