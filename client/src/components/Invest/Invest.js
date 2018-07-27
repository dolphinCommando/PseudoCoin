import React from 'react';
import './Invest.css';

const Invest = props => {
  let coinOptions
  if(props.options) {
    coinOptions = props.options.map(coin => <option>{coin}</option>)
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
        <li className="nav-item">
          <a className="nav-link" id="sell-tab" data-toggle="tab" href="#sell"      role="tab" aria-controls="sell" aria-selected="false">Sell</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="buy" role="tabpanel"      aria-labelledby="buy-tab">
          <h4>Buy Cryptocurrency</h4>
          <p>Buy coins with virtual United States Dollars.</p> 
          <form>
            <div className="form-group">
              <label for="usdCurrency">Dollars</label>
              <input type="text" className="form-control" id="usdCurrency" aria-describedby="usdAmount" placeholder="Enter amount of dollars" />
            </div>
            <div className="form-group">
              <label for="buyCurrency">Currency Name</label>
              <input type="text" className="form-control" id="buyCurrency" aria-describedby="currencyInput" placeholder="Enter symbol or name" />
            </div>
            <button type="submit">Submit</button>
          </form>
          <p>Exchange rate: </p>
        </div>
        <div className="tab-pane fade" id="exchange" role="tabpanel"       aria-labelledby="exchange-tab">
          <h4>Exchange Cryptocurrency</h4>
          <p>Trade a cryptocurrency for a different cryptocurrency.</p>
          <form>
            <div class="form-group">
              <label for="coinSelectEx">Select a coin you own.</label>
              <select multiple class="form-control" id="coinSelectEx">
                {coinOptions}
              </select>
            </div>
            <div className="form-group">
              <label for="currency">Currency Name</label>
              <input type="text" className="form-control" id="currency" aria-describedby="currencyInput" placeholder="Enter symbol or name" />
            </div>
            <button type="submit">Submit</button>
          </form>
          <p>Exchange rate: </p>
        </div>
        <div className="tab-pane fade" id="sell" role="tabpanel"       aria-labelledby="sell-tab">
          <h4>Sell Cryptocurrency</h4>
          <p>Cash in a coin at a virtual exchange.</p>
          <form>
            <div class="form-group">
              <label for="coinSelectSell">Select a coin you own.</label>
              <select multiple class="form-control" id="coinSelectSell">
                {coinOptions}
              </select>
            </div>
            <div className="form-group">
              <label for="coinAmount">Coin Amount</label>
              <input type="text" className="form-control" id="usdCurrency" aria-describedby="coinAmount" placeholder="Enter amount of coin" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>            
    </div>
  )
}

export default Invest;