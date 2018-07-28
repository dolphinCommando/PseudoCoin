import React from 'react';
import './Wallet.css';
import Bank from '../../components/Bank';
import API from '../../util/API';

class Wallet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shares: []
      }
    }

    componentDidMount() {
      API.getCoins().then(coinData => {
        console.log(coinData);
        this.setState({
          shares: coinData
        })
      })
    }

    render() {
      return (
        <div>
          <Bank shares={this.state.shares}/>
        </div>
      )
    }  
}

export default Wallet;