var request = require('request');
const CRYPTO_URL = 'https://min-api.cryptocompare.com/data/';
const COINS = [
  'BTC', 'ETH', 'LTC', 'XRP', 'BCH',
  'XMR', 'ZEC', 'DASH', 'ETC', 'USDT', 
  'EOS', 'XLM', 'ADA', 'TRX', 'NEO'];
const COIN_NAMES = [
  'Bitcoin', 'Ethereum', 'Litecoin', 'Ripple', 'Bitcoin Cash',
  'Monero', 'Zcash', 'Dash', 'Ethereum Classic', 
  'Tether', 'EOS', 'Stellar', 'Cardano', 'TRON', 'NEO'
  ];

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
    if (!COINS.includes(req.params.sym)) {
      res.json(new Error('Please enter one of these coins: ' + COINS));
    }
    else {
      var url = CRYPTO_URL + 'price?fsym=' + sym + '&tsyms=USD';
      requestCrypto(url, function(body) {
        res.json(JSON.parse(body).USD)
      })
    }
  },
  currentAvailablePrices: function(req, res) {
    var coins = COINS;
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
  recommendedCoins: function(req, res) {
    var arr = [];
    for (var i = 0; i < COINS.length; i++) {
      arr.push({
        name: COIN_NAMES[i],
        symbol: COINS[i]
      })
    }
    res.json(arr);
  },
  recommendedCoinsExtra: function(req, res) {
    var recommend = COINS;
    requestCrypto('https://www.cryptocompare.com/api/data/coinlist/', function(body) {
      var data = JSON.parse(body).Data;
      var arr = [];
      (Object.keys(data)).forEach(function(key) {
        var val = data[key];
        if(recommend.includes(val.Symbol)) {
          arr.push({
            name: val.CoinName,
            symbol: val.Symbol,
            id: val.Id,
            url: val.Url
          })
        }
      });
      res.json(arr)
    })
  },
  topCoins: function(req, res) {
    requestCrypto('https://www.cryptocompare.com/api/data/coinlist/', function(body) {
      var data = JSON.parse(body).Data;
      var arr = [];
      (Object.keys(data)).forEach(function(key) {
        var val = data[key];
        if((+val.SortOrder) <= (15 || req.query.limit)) {
          arr.push({
            name: val.CoinName,
            symbol: val.Symbol,
            id: val.Id,
            order: val.SortOrder,
            url: val.Url
          })
        }
      })
      arr.sort((a, b) => +a.order - +b.order);
      res.json(arr);
    }) 
  },
  marketDisplay: function(req, res) {
    var coins = req.body.toString();
    var url = CRYPTO_URL + 'pricemultifull?fsyms=' + coins + '&tsyms=USD';
    requestCrypto(url, function(body) {
      var arr = [];
      var display = JSON.parse(body).DISPLAY;
      var keys = Object.keys(display);
      keys.forEach(function(key) {
        var elem = display[key].USD; 
        arr.push({
          symbol: elem.FROMSYMBOL,
          price: elem.PRICE,
          change: elem.CHANGEPCT24HOUR + '%',
          open: elem.OPENDAY,
          high: elem.HIGHDAY,
          low: elem.LOWDAY,
          volume: elem.VOLUME24HOURTO,
          supply: elem.SUPPLY,
          cap: elem.MKTCAP
        })
      })
      res.json(arr);
    })
  },
  coinHistory: function(req, res) {
    //var tags = ['histominute', 'histohour', 'histoday'];
    //var tag = (tags.includes(req.params.tag)) ? req.params.tag : 'histohour';
    var sym = (req.params.sym) ? req.params.sym : 'BTC';
    var url = CRYPTO_URL + 'histohour' + '?fsym=' + sym + '&tsym=USD&limit=30&aggregate=3';
    requestCrypto(url, function(body) {
      var data = JSON.parse(body).Data;
      var arr = [];
      data.forEach(function(point) {
        arr.push({
          time: point.time,
          close: point.close
        })
      })
      //console.log(arr);
      res.json(arr)
    })

  }
 }
