var request = require('request');

var coinlistURL = 'https://www.cryptocompare.com/api/data/coinlist/';
// Be aware that the # of currencies in CryptoCompare is 2842
var priceURLTest = 'https://min-api.cryptocompare.com/data/price?fsym=BTG&tsyms=BTC,LTC,ETH,USD';
var CRYPTO = 'https://min-api.cryptocompare.com/data/';
var PRICE_URL = CRYPTO += 'price';
var PRICE_HIST_URL = CRYPTO += 'pricehistorical';
var HISTO_MIN_URL = CRYPTO += 'histominute';
var HISTO_HOUR_URL = CRYPTO += 'histohour';
var HISTO_DAY_URL = CRYPTO += 'histoday';

function requestCrypto(url, cb) {
  request(url, function(error, response, body) {
    if (error) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);  
    }
    cb(body);
  });
}
/*
requestCrypto(priceURLTest, function(body) {
  console.log(JSON.parse(body));
});
*/
