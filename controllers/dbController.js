const db = require('../models');
var mongoose = require('mongoose');
var moment = require('moment');

function sumAmount(total, num) {
  return +total + +num.amount;
}

module.exports = {
  getCoins: function(req, res) {
    db.Coins
      .find({}).sort({timestamp: -1})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
  },
  findCoin: function(req, res) {
    db.Coins
    .find({_id: mongoose.Types.ObjectId(req.params.id)})
    .then(dbData => {
      res.json(dbData);
    })
    .catch(err => {
      res.sendStatus(404).json(err)
    })
  },
  createCoin: function(req, res) {
    db.Coins
      .create({
        symbol: req.body.symbol,
        amount: req.body.amount,
        timestamp: moment.utc()
      })
      .then(dbData => {
        res.json(dbData)
      })
      .catch(err => {
        res.sendStatus(500).json(err)
      })
  },
  updateCoin: function(req, res) {
    db.Coins
      .where({symbol: req.params.symbol})
      .update({$set: {
        amount: req.body.amount,
        timestamp: req.body.timestamp
      }})
      .then(dbData => {
        res.json(dbData)
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
  },
  deleteCoin: function(req, res) {
    db.Coins
      .deleteOne({symbol: req.params.symbol})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
  },
  getDeposit: function(req, res) {
    db.Deposit
      .find({})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
  },
  sumDeposit: function(req, res) {
    db.Deposit
      .find({})
      .then(dbData => {
        res.json(dbData.reduce(sumAmount, 0));
      })
      .catch(err => {
        res.sendStatus(500).json(err);
      })
  },
  addDeposit: function(req, res) {
    db.Deposit
      .create({amount: req.body.amount, timestamp: moment.utc()})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(500).json(err);
      })         
  }              
}
