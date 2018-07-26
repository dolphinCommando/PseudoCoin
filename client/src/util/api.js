import axios from 'axios';

export default {
  getTrades: function() {
    return axios.get('/api/coins');
  },
  findTrade: function(id) {
    return axios.get('/api/coins/:id');
  },
  deleteTrade: function(id) {
    return axios.delete('/api/coins/:id');
  },
  updateTrade: function(id) {
    return axios.put('/api/coins/:id');
  },
  getDollars: function() {
    return axios.get('/api/wallet');
  },
  tradeForDollars: function(cash) {
    return axios.put('/api/wallet/trade')
  },
  spendDollars: function(cash) {
    return axios.put('/api/wallet/spend')
  },
  getCryptoData: function() {
    return axios.get('/api/crypto');
  },
  getCryptoMarket: function(coinarr) {
    return axios.post('/api/crypto/market', coinarr)
  },
  getCryptoHistoryHour: function(symbol) {
    return axios.get('/api/crypto/history/' + symbol)
  }
}