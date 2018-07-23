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
  getCryptoData: function() {
    return axios.get('/api/crypto');
  },
  getCryptoMarket: function(coinarr) {
    return axios.post('/api/crypto/market', coinarr)
  }
}