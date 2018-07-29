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

// Need to convert axios callbacks to promises

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
  dollarsToCrypto: function(sym, amount, cb) {
    if (Number.isNaN(+amount) || +amount<=0) {
      cb(new Error('Please enter a numeric amount greater than 0.'))
    }
    else {
      const url = CRYPTO_URL + 'price?fsym=USD&tsyms=' + sym;
      axios.request(url).then(body => {
        var coins = +body.data[sym] * +amount;
        cb(coins);
      }).catch(err => cb(err))
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
  sumCryptos: function(dbObj, cb) {
    var fsyms = dbObj.map(elem => elem.symbol).toString();
    var url = CRYPTO_URL + 'pricemulti?fsyms=' + fsyms + '&tsyms=USD';
    var sum = 0;
    axios.request(url).then(body => {
      var matrix = body.data;
      console.log('matrix: ' + JSON.stringify(body.data))
      var matrix = Object.keys(body.data);
      for (var i = 0; i < matrix.length; i++) {
        sum += +dbObj[i].amount * +body.data[matrix[i]].USD
      }
      //console.log(sum)
      cb(sum); 
    }).catch(err => cb(err));
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
  coinHistory: function(mySym, cb) {
    //var tags = ['histominute', 'histohour', 'histoday'];
    var sym = (mySym) ? mySym : 'BTC';
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
  isCoin: function(coin, cb) {
    axios.request({
      url: 'https://www.cryptocompare.com/api/data/coinlist/',
    }).then(body => {
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
  amountFromTo: function(body, cb) {
    var url = CRYPTO_URL + 'price?fsym=' + body.from + '&tsyms='(body.to).String();
    axios.request(url).then(response => {
      var numCoins = Object.values(response.data);
      cb(+body.amount * +numCoins)
    }).catch(err => cb(err))

  }
}
