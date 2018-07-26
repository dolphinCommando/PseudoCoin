var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var walletSchema = new Schema({
    symbol: {
      type: String,
      unique: true,
      required: true
    },
    amount: {
      type: Number,
      min: 0,
      required: true
    },
    timestamp: Number
})

var Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;