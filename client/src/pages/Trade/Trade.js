import React from 'react';
import './Trade.css';
import Invest from '../../components/Invest';
import API from '../../util/api';
import crypto from '../../util/crypto';

class Trade extends React.Component {
  state = {
    buyDollars: '',
    buyCoin: '',
    exCoinFrom: '',
    exCoinTo: '',
    exCoinAmount: '',
    options: []
  }
  componentDidMount() {
    this.loadOptions()
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleBuy = event => {
    event.preventDefault();
    if (this.state.buyDollars && this.state.buyCoin) {
      crypto.dollarsToCrypto(this.state.buyCoin, this.state.buyDollars, convertedAmount => {
        console.log(convertedAmount)
          API.createCoin({
            symbol: this.state.buyCoin, 
            amount: convertedAmount
          }).then(dbData => {
            console.log('Coin created OK')
            console.log(dbData);
            this.setState({
              buyCoin: ''
            })
          }).catch(err => console.log(err));
          API.addDeposit({
              amount: this.state.buyDollars
            }).then(dbData => {
              console.log('Transaction OK')
              console.log(dbData)
              this.setState({
                buyDollars: ''
              })

            }).catch(err => {
              console.log(err)
            })
        
        })
      }
    }

  handleExchange = event => {
    event.preventDefault();
    if (this.state.exCoinAmount && this.state.exCoinFrom && this.state.exCoinTo) {
      crypto.amountFromTo({
        from: this.state.exCoinFrom,
        to: this.state.exCoinTo,
        amount: this.state.exCoinAmount
      }, (err, convertedAmount) => {
        if (err) {alert(err)}
        else {
          API.createCoin({
            symbol: this.state.exCoinFrom,
            amount: convertedAmount
          }).then(dbData => {
            console.log('Transaction OK')
            console.log(dbData)
            this.setState({
              exCoinAmount: '',
              exCoinFrom: '',
              exCoinTo: ''
            })
          }).catch(err => {
            console.log(err)
          })
        }
      })
    }
  }

  loadOptions = () => {
    API.getCoins().then(dbData => {
      this.setState({
        options: dbData.data
      });
    }).catch(err => console.log(err));
  }

  render() {
    let coinOptions;
    if(this.state.options) {
      coinOptions = this.state.options.map(coin => <option>{coin.symbol} {coin.amount}</option>)
    }
    else {
      coinOptions = <option>You do not have coins yet</option>
    }
  
    return (
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="buy-tab" data-toggle="tab" href="#buy" role="tab" aria-controls="buy" aria-selected="true">Buy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="exchange-tab" data-toggle="tab" href="#exchange" role="tab" aria-controls="exchange" aria-selected="false">Exchange</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="buy" role="tabpanel"      aria-labelledby="buy-tab">
            <h4>Buy Cryptocurrency</h4>
            <p>Buy coins with virtual United States Dollars.</p> 
            <form>
              <div className="form-group">
                <label htmlFor="usdCurrency">Dollars</label>
                <input type="text" className="form-control" id="usdCurrency" aria-describedby="usdAmount" placeholder="Enter amount in $$"
                name="buyDollars" 
                value={this.state.buyDollars}
                onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="buyCurrency">Currency Name</label>
                <input type="text" className="form-control" id="buyCurrency" aria-describedby="currencyInput" placeholder="Enter symbol or name" 
                name="buyCoin"
                value={this.state.buyCoin}
                onChange={this.handleInputChange} />
              </div>
              <button type="submit" onClick={this.handleBuy}>Submit</button>
            </form>
            <p>Exchange rate: </p>
          </div>
          <div className="tab-pane fade" id="exchange" role="tabpanel"       aria-labelledby="exchange-tab">
            <h4>Exchange Cryptocurrency</h4>
            <p>Trade a cryptocurrency for a different cryptocurrency.</p>
            <form>
              <div className="form-group">
                <label htmlFor="coinSelectEx">Select a coin you own.</label>
                <select multiple className="form-control" id="coinSelectEx"
                value={this.state.exCoinFrom}
                name="exCoinFrom">
                  {coinOptions}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="usdCurrency">Amount to Trade</label>
                <input type="text" className="form-control" id="coinCurrency" aria-describedby="coinCurrency"
                name="exCoinAmount" 
                value={this.state.exCoinAmount}
                onChange={this.handleInputChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="currency">Trade For: </label>
                <input type="text" className="form-control" id="currency" aria-describedby="currencyInput" placeholder="Enter symbol or name" 
                name="exCoinTo"
                value={this.state.exCoinTo}
                onChange={this.handleInputChange}/>
              </div>
              <button type="submit" onClick={this.handleExchange}>Submit</button>
            </form>
            <p>Exchange rate: </p>
          </div>
        </div>            
      </div>
    )
  }
  
  }



export default Trade;