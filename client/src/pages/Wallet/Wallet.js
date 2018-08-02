import React from 'react';
import './Wallet.css';
import Bank from '../../components/Bank';
import API from '../../util/api';
import crypto from '../../util/crypto';

class Wallet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shares: [],
        value: 0,
        dollars: 0
      };
      this.calculateWorth = this.calculateWorth.bind(this)
    }

    componentDidMount() {
     this.loadCoins();
     this.loadDeposit();
    }

    loadCoins = () => {
      API.getCoins()
      .then(coinData => {
        console.log(coinData.data);
        if (coinData.data.length) {
        crypto.sumCryptos(coinData.data, usd => {
          //console.log(usd)
          this.setState({
            shares: coinData.data,
            value: usd
          })
        })
      }
        
      })
    }
    loadDeposit = () => {
      API.getDeposit()
      .then(dbData => {
        //console.log(dbData);
        this.setState({
          dollars: dbData.data
        })
      })
    }
    calculateWorth() {
      if (this.state.dollars) {
        return (100 * +((+this.state.value - +this.state.dollars)/(+this.state.dollars))).toPrecision(5);
      }
      else return 0;
    }

    render() {
      return (
        <div>
          <Bank 
            shares={this.state.shares} 
            dollars={this.state.dollars}
            holdings={this.state.value}
            worth={this.calculateWorth()}
          />
        </div>
      )
    }  
}

export default Wallet;