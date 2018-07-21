var request = require('request');
var coinlistURL = 'https://www.cryptocompare.com/api/data/coinlist/';
var priceURL = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,LTC,USD,EUR';
  request(priceURL, function(error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', JSON.parse(body)); 
  })
