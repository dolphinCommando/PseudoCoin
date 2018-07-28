import axios from 'axios';
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

export default {
  currentPrice: function(sym, cb) {
    if (!COINS.includes(sym)) {
      (new Error('Please enter one of these coins: ' + COINS));
    }
    else {
      var url = CRYPTO_URL + 'price?fsym=' + sym + '&tsyms=USD';
      axios.request(url, function(body) {
        cb(body.data.USD);
      })
    }
  },
  currentAvailablePrices: function(cb) {
    var coins = COINS;
    var fsyms = coins.toString();
    var url = CRYPTO_URL + 'pricemulti?fsyms=' + fsyms + '&tsyms=USD';
    var arr = []
    axios.request(url, function(body) {
      var matrix = body.data;
      coins.forEach(function(coin) {
        arr.push({name: coin, price: matrix[coin].USD, tsym: 'USD'})
      })
      cb(arr);
    })
  },
  recommendedCoins: function() {
    var arr = [];
    for (var i = 0; i < COINS.length; i++) {
      arr.push({
        name: COIN_NAMES[i],
        symbol: COINS[i]
      })
    }
    return arr;
  },
  recommendedCoinsExtra: function(cb) {
    var recommend = COINS;
    axios.request('https://www.cryptocompare.com/api/data/coinlist/', function(body) {
      var data = body.data.Data;
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
      cb(arr);
    })
  },
  topCoins: function(cb) {
    axios.request('https://www.cryptocompare.com/api/data/coinlist/', function(body) {
      var data = body.data.Data;
      var arr = [];
      (Object.keys(data)).forEach(function(key) {
        var val = data[key];
        if((+val.SortOrder) <= (15)) {
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
      cb(arr);
    }) 
  },
  marketDisplay: function(myCoins, cb) {
    var coins = myCoins.toString();
    var url = CRYPTO_URL + 'pricemultifull?fsyms=' + coins + '&tsyms=USD';
    axios.request(url).then(body => {
      var display = body.data.DISPLAY;
      console.log(display)
      var keys = Object.keys(display);
      const arr = keys.map(key => {
        var elem = display[key].USD; 
        return {
          symbol: elem.FROMSYMBOL,
          price: elem.PRICE,
          change: elem.CHANGEPCT24HOUR + '%',
          open: elem.OPENDAY,
          high: elem.HIGHDAY,
          low: elem.LOWDAY,
          volume: elem.VOLUME24HOURTO,
          supply: elem.SUPPLY,
          cap: elem.MKTCAP
        }
      })
      console.log(arr);
      cb(arr);
    }).catch(err => {console.log(err)})
  },
  coinHistory: function(sym, cb) {
    //var tags = ['histominute', 'histohour', 'histoday'];
    var sym = (sym) ? sym : 'BTC';
    var url = CRYPTO_URL + 'histohour' + '?fsym=' + sym + '&tsym=USD&limit=30&aggregate=3';
    var arr = [];
    axios.request(url).then(body => {
      var data = body.data.Data;
      data.forEach(function(point) {
        arr.push({
          time: point.time,
          close: point.close
        })
      })
      console.log(arr);
      cb(arr);
    })
  },
  priceTimestamp: function(body, cb) {
    var url = `${CRYPTO_URL}pricehistorical?fsym=${body.fsym}`
    url+= `&tsyms=${body.tsym}&ts=${body.ts}`
    axios.request(url, function(data) {
      var price = JSON.parse(data)[body.fsym][body.tsym];
      cb(price);
    })
  },
  findCoin: function(coin, cb) {
    axios.request('https://www.cryptocompare.com/api/data/coinlist/', function(body) {
      var symbolArr = [];
      var nameArr = [];
      var data = body.data.Data;
      Object.keys(data).forEach(function(key) {
        symbolArr.push(data[key].Symbol)
        nameArr.push(data[key].Name)
      })
      if (symbolArr.filter(elem => elem === coin) || nameArr.filter(elem => elem === coin)) {
        cb(true);
      }
      else {
        cb(false);
      }
    })
  },
  priceFromTo: function(body, cb) {
    var from = body.from;
    var to = (body.to).String();
    var url = CRYPTO_URL + 'price?fsym=' + from + '&tsyms=' + to;
    axios.request(url, function(body) {
      cb(Object.values(body.data));
    })
  }
}
