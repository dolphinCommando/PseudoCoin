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

var depositSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  }
});

var userSchema = new Schema({
  username: String,
  googleId: String,
  coins: [coinsSchema],
  deposit: [depositSchema]
})

var User = mongoose.model('User', userSchema);
module.exports = User;