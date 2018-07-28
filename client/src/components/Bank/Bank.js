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
    data.push(<div><p>No investments yet.</p></div>);
  }
  return (
    <div>
      <div>
        <h2>Net Worth</h2>
        <p>$ {props.worth}</p>
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
        <h3>Cash Out</h3>
        <p>$ {props.cash}</p>
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