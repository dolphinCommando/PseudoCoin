var db = require('../models');
var mongoose = require('mongoose');

module.exports = {
  getCoins: function(req, res) {
    db.Coin
      .find({})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
  },
  findCoin: function(req, res) {
    db.Coin
    .find({_id: mongoose.Types.ObjectId(req.params.id)})
    .then(dbData => {
      res.json(dbData);
    })
    .catch(err => {
      res.sendStatus(404).json(err)
    })
  },
  createCoin: function(req, res) {
    db.Coin
      .create({
        symbol: req.body.symbol,
        amount: req.body.amount,
        timestamp: req.body.timestamp
      })
      .then(dbData => {
        res.json(dbData)
      })
      .catch(err => {
        res.sendStatus(500).json(err)
      })
  },
  updateCoin: function(req, res) {
    db.Coin
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
    db.Coin
      .deleteOne({symbol: req.params.symbol})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
  },
  getWallet: function(req, res) {
    db.Wallet
      .find({})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
  },
  addCash: function(req, res) {
    if (req.path.includes('in')) {
      db.Wallet
        .update({}, {$set: {cashIn: +req.body}})
        .then(dbData => {
          res.json(dbData);
        })
        .catch(err => {
          res.sendStatus(500).json(err);
        })        
    }
    else if (req.path.includes('out')) {
      db.Wallet
        .update({}, {$set: {cashOut: +req.body}})
        .then(dbData => {
          res.json(dbData);
        })
        .catch(err => {
          res.sendStatus(500).json(err);
        })                  
    }
    else {
      res.sendStatus(418).json('Incorrect path');
    }
  }      
}
