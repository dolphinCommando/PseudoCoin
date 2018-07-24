var db = require('../models');

module.exports = {
  readCoins: function(req, res) {
    db.wallet
      .find({})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
  },
  createCoin: function(req, res) {
    db.wallet 
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
    db.wallet
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
    db.wallet
      .deleteOne({symbol: req.params.symbol})
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.sendStatus(404).json(err)
      })
  }

}
