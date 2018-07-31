import React from 'react';
import axios from 'axios';

const GoogleAuth = () => {
  return axios.get('/auth/google');
}

export default GoogleAuth;