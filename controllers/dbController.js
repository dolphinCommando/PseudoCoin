const db = require('../models');
var mongoose = require('mongoose');
var moment = require('moment');

function sumAmount(total, num) {
  return +total + +num.amount;
}

module.exports = {
  verifyUser: function(req, res) {
    db.User
    .findOne({username: req.body.username, password: req.body.password})
    .then(dbData => res.json(dbData))
    .catch(err => res.json('User not found'))
  },
  registerUser: function(req, res) {
    db.User
      .create({
        username: req.body.username,
        password: req.body.password
      })
      .then(dbData => {
        res.json(dbData)
      })
      .catch(err => res.sendStatus(404).json(err))
  },
  getCoins: function(req, res) {
    db.Coins
      .find({username: req.params.user})
      .sort({timestamp: -1})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
    /*
    }).catch(err => {
      res.sendStatus(404).json(err)
    })
    */
  },
  findCoin: function(req, res) {
      db.Coins
      .find({_id: mongoose.Types.ObjectId(req.params.id), username: req.params.user})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
    //}).catch(err => res.sendStatus(404).json(err))
    
  },
  createCoin: function(req, res) {
      db.Coins
        .create({
          symbol: req.body.symbol,
          amount: req.body.amount,
          username: req.params.user,
          timestamp: moment.utc()
        })
        .then(dbData => {
          res.json(dbData)
        })
        .catch(err => {
          res.sendStatus(500).json(err)
        })
      //}).catch(err => res.sendStatus(404).json(err))
  },
  updateCoin: function(req, res) {
    db.Coins
      .where({symbol: req.params.symbol, username: req.params.user})
      .update({$set: {
        amount: req.body.amount,
        timestamp: moment.utc()
      }})
      .then(dbData => {
        res.json(dbData)
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
    //}).catch(err => res.sendStatus(404).json(err))
  },
  deleteCoin: function(req, res) {
      db.Coins
      .deleteOne({symbol: req.params.symbol, username: req.params.user})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
    //}).catch(err => res.sendStatus(404).json(err))
  },
  getDeposit: function(req, res) {
      db.Deposit
      .find({username: req.params.user})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
    //}).catch(err => res.sendStatus(404).json(err))
  },
  sumDeposit: function(req, res) {
      db.Deposit
      .find({username: req.params.user})
      .then(dbData => {
        res.json(dbData.reduce(sumAmount, 0));
      })
      .catch(err => {
        res.sendStatus(500).json(err);
      })
    //}).catch(err => res.sendStatus(404).json(err))
  },
  addDeposit: function(req, res) {
    var user = db.User.findOne({username: req.params.user})
      console.log(user);
      db.Deposit
      .create({
        amount: req.body.amount,
        username: req.params.user, 
        timestamp: moment.utc()
      })
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(500).json(err);
      }) 
    //}).catch(err => res.sendStatus(404).json(err))        
  }              
}

