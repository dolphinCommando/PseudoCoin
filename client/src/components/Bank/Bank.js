import React from 'react';
import './Bank.css';

const Bank = props => {
  return (
    <div>
      <div>
        <h2>Total Value of Your Cryptocurrencies</h2>
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
        <form>
          <label for="add-money">Add money to your account</label>
          <input id="add-money" onChange={props.onChange} />
          <small>{props.errmessage}</small>
          <button type="submit" onClick={props.onClick}>Deposit</button>
        </form>
      </div>
    </div>
  )
}

export default Bank;