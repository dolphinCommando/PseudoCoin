import axios from 'axios';

export default {
  getCoins: function() {
    return axios.get('/api/coins');
  },
  findCoin: function(id) {
    return axios.get('/api/coins/:id');
  },
  deleteCoin: function(id) {
    return axios.delete('/api/coins/:id');
  },
  updateCoin: function(id) {
    return axios.put('/api/coins/:id');
  },
  getCash: function() {
    return axios.get('/api/wallet/cash');
  },
  addCash: function(cash) {
    return axios.post('/api/wallet/cash')
  },
  getDeposit: function() {
    return axios.get('/api/wallet/deposit');
  },
  addDeposit: function(deposit) {
    return axios.post('/api/wallet/deposit')
  }
}