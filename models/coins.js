var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coinsSchema = new Schema({
    symbol: {
      type: String,
      unique: true,
      required: true,
    },
    amount: {
      type: Number,
      min: 0,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    }
})

var Coins = mongoose.model('Coins', coinsSchema);
module.exports = Coins;