import React from 'react';
import './Investments.css';

const Investments = props => {
  const shares = props.shares;
  let data = [];
  shares.forEach(function(coin) {
    data.push(
      <div>
        <p>{coin.symbol}: {coin.amount}</p>
      </div>
    );
  });
  return (
    <div>
      <h2>Your Investments</h2>
      <div>
        {data}
      </div>
    </div>
  )
}

export default Investments;