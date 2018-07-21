import axios from 'axios';

export default {
  getTrades: function() {
    axios.get('/api/coins');
  },
  findTrade: function(id) {
    axios.get('/api/coins/:id');
  },
  deleteTrade: function(id) {
    axios.delete('/api/coins/:id');
  },
  updateTrade: function(id) {
    axios.put('/api/coins/:id');
  },
  getCryptoData: function() {
    axios.get('/api/crypto');
  }
}