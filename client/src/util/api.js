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
    return axios.get('/api/cash');
  },
  addCash: function(cash) {
    return axios.post('/api/cash')
  },
  getDeposit: function() {
    return axios.get('/api/deposit');
  },
  addDeposit: function(deposit) {
    return axios.post('/api/deposit')
  }
}