import axios from 'axios';

export default {
  getCoins: function() {
    return axios.get('/api/coins');
  },
  findCoin: function(id) {
    return axios.get('/api/coins/' + id);
  },
  createCoin: function(body) {
    return axios.post('/api/coins', body)
  },
  deleteCoin: function(id) {
    return axios.delete('/api/coins/' + id);
  },
  updateCoin: function(id) {
    return axios.put('/api/coins/' + id);
  },
  getDeposit: function() {
    return axios.get('/api/wallet');
  },
  addDeposit: function(body) {
    return axios.post('/api/wallet', body)
  }
}