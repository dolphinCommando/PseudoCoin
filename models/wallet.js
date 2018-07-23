var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var walletSchema = new Schema({
  coins: [{
    symbol: String,
    amount: Number,
    timestamp: Number
  }]
})

var wallet = mongoose.model('wallet', walletSchema);
module.exports = wallet;