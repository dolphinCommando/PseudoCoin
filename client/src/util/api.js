import axios from 'axios';

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCookie() {
  var username = getCookie("pseudocoinUser");
  //console.log('cookie username: ' + username);
  if (username !== "") {
      return username;
  } else {
      return null;
  }
}

export default {
  verifyUser: function(username, password) {
    return axios.post('/api/login', {username: username, password: password})
  },
  registerUser: function(username, password) {
    return axios.post('/api/register', {username: username, password: password})
  },
  getCoins: function() {
    return axios.get('/api/coins/' + checkCookie());
  },
  findCoin: function(id) {
    return axios.get('/api/coins/' + checkCookie() + '/' + id);
  },
  createCoin: function(body) {
    return axios.post('/api/coins/' + checkCookie(), body)
  },
  deleteCoin: function(id) {
    return axios.delete('/api/coins/' + checkCookie() + '/' + id);
  },
  updateCoin: function(symbol, body) {
    return axios.put('/api/coins/' + checkCookie() + '/' + symbol, body);
  },
  getDeposit: function() {
    return axios.get('/api/wallet/' + checkCookie());
  },
  addDeposit: function(body) {
    return axios.post('/api/wallet/' + checkCookie(), body)
  }
}