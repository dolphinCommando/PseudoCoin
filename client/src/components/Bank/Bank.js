import React from 'react';
import './Bank.css';

const Bank = props => {
  const shares = props.shares;
  let data = [];
  if (shares) {
  shares.forEach(function(coin) {
    data.push(
      <div>
        <p>{coin.symbol}: {coin.amount}</p>
      </div>
    );
  });
  }
  else {
    data = <p>Go to the Trade page to buy currencies.</p>
  }
  return (
    <div>
      <div>
        <h2>Return on Investment</h2>
        <p>{props.worth}%</p>
      </div>
      <div>
        <h3>Total Value of Your Cryptocurrencies</h3>
        <p>$ {props.holdings}</p>
      </div>
      <div>
        <h3>Dollars Invested</h3>
        <p>$ {props.dollars}</p>
      </div>
      <div>
      <h2>Your Investments</h2>
        <div>
          {data}
        </div>
      </div>
    </div>
  )
}

export default Bank;