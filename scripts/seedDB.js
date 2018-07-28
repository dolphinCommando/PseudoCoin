const mongoose = require("mongoose");
const db = require("../models");
var moment = require('moment');

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/cryptoTest"
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
/*
cashSeed = [
  { 
    symbol: 'BTC',
    amount: 15.00,
    timestamp: moment.utc()
  },
  {
    symbol: 'BTC',
    amount: 40.00,
    timestamp: moment.utc()
  },
  {
    symbol: 'BTC',
    amount: 25.00,
    timestamp: moment.utc()
  }
]
*/

db.Coins
  .remove({})
  .then(() => db.Coins.insertMany(coinsSeed))
  .then(data => {
    console.log('Cryptocurrency Seed...');
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Deposit
  .remove({})
  .then(() => db.Deposit.insertMany(depositSeed))
  .then(data => {
    console.log('Dollars Invested Seed...');
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


