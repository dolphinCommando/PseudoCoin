var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coinSchema = new Schema({
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

var Coin = mongoose.model('Coin', coinSchema);
module.exports = Coin;