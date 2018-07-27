import React from 'react';
import './Wallet.css';
import Bank from '../../components/Bank';
import Invest from '../../components/Invest';

class Wallet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shares: [
          {symbol: 'ETH', amount: 500.00},
          {symbol: 'BTC', amount: 700.00}
        ],
        cash: 20.00,
        dollars: 800.00,
        holdings: 1200.00
      }
    }
    render() {
      return (
        <div>
          <Bank 
            dollars={this.state.dollars}
            cash={this.state.cash} 
            holdings={this.state.holdings} 
            shares={this.state.shares} />
          <Invest />
        </div>
      )
    }  
}

export default Wallet;