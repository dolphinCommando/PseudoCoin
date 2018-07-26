import React from 'react';
import './Bank.css';

const Bank = props => {
  return (
    <div>
      <h2>Bank</h2>
      <h3>{props.dollars}</h3>
      <form>
        <label for="add-money">Make a deposit</label>
        <input id="add-money" onChange={props.onChange} />
        <small>{props.errmessage}</small>
        <button type="submit" onClick={props.onClick} />
      </form>
    </div>
  )
}

export default Bank;