const mongoose = require("mongoose");
const db = require("../models");
var moment = require('moment');

// "mongodb://localhost/cryptoTest"
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pseudocoinDB"
);

const coinsSeed = [
  {
    symbol: 'BTC',
    amount: 0.01,
    timestamp: moment.utc()
  },
  {
    symbol: 'LTC',
    amount: 0.8,
    timestamp: moment.utc()
  },
  {
    symbol: 'ETH',
    amount: 1.0,
    timestamp: moment.utc()
  },
  {
    symbol: 'BCH',
    amount: 0.2,
    timestamp: moment.utc()
  }
]

const depositSeed = [
  {
    amount: 82.50,
    symbol: 'BTC',
    timestamp: moment.utc()
  },
  {
    amount: 67.78,
    symbol: 'LTC',
    timestamp: moment.utc()
  },
  {
    amount: 472.51,
    symbol: 'ETH',
    timestamp: moment.utc()
  },
  {
    amount: 165.23,
    symbol: 'BCH',
    timestamp: moment.utc()
  }
];

const userSeed = [
  {
    username: 'john',
    googleId: '67890'
  },
  {
    username: 'jane',
    googleId: '12345'
  }
]

db.User
  .remove({})
  .then(() => createUser('jane', '12345'))
  .then((data) => console.log('Success!'))
  .catch(err => console.log(err));

function createUser(username, googleId) {
  var newUser = new db.User({
    username: username,
    googleId: googleId,
    coins: coinsSeed,
    deposit: depositSeed
  });
  newUser.save().then(() => {
    db.User.findOne({username: 'jane'}).then(dbData => {
      console.log(dbData);
      process.exit(0)
    }).catch(err => {
      console.log(err);
      process.exit(1)
    })
  }) 
}
