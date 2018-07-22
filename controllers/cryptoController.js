var request = require('request');
const CRYPTO_URL = 'https://min-api.cryptocompare.com/data/';

function requestCrypto(url, cb) {
  request(url, function(error, response, body) {
    if (error) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);  
    }
    else {
      cb(body);
    }
  });
}

module.exports = {
  currentPrice: function(req, res) {
    if (!this.getAvailableCoins().includes(req.params.coin)) {
      res.json(new Error('Please enter one of these coins: ' + acceptableCoins));
    }
    else {
      var url = CRYPTO_URL + 'price?fsym=' + coin + '&tsyms=USD';
      requestCrypto(url, function(body) {
        res.json(JSON.parse(body).USD)
      })
    }
  },
  currentAvailablePrices: function(req, res) {
    var coins = this.getAvailableCoins();
    var fsyms = coins.toString();
    var url = CRYPTO_URL + 'pricemulti?fsyms=' + fsyms + '&tsyms=USD';
    requestCrypto(url, function(body) {
      var matrix = JSON.parse(body);
      var arr = []
      coins.forEach(function(coin) {
        arr.push({name: coin, price: matrix[coin].USD, tsym: 'USD'})
      })
      res.json(arr);
    })
  },
  getAvailableCoins: function() {
    return ['BTC', 'LTC', 'ETH', 'BCH', 'XRP']
  }
}





