import React from 'react';
import './Trade.css';
import Invest from '../../components/Invest';
import crypto from '../../util/crypto';

class Trade extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Invest options={crypto.recommendedCoins()} />
    )
  }
}

export default Trade;