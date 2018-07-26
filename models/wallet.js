var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var walletSchema = new Schema({
  cashIn: Number,
  cashOut: Number
})

var Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;