import React from 'react';
import './Wallet.css';
import Investments from '../../components/Investments';
import Bank from '../../components/Bank';
import SearchBar from '../../components/SearchBar';

class Wallet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shares: [
          {symbol: 'USD', amount: 1000.00},
          {symbol: 'LTC', amount: 86.25}
        ],
        dollars: 1000.00
      }
    }
    render() {
      return (
        <div>
          <Bank dollars={this.state.dollars} />
          <Investments shares={this.state.shares} />
          <SearchBar />
        </div>
      )
    }  
}

export default Wallet;