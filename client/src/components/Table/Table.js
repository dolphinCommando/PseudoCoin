import React from 'react';
import './Table.css';

const Table = (props) => {
  const tableHeaders = [
    'Name', 'Symbol', 'Price', 'Change (24h)', 
    'Volume (24h)', 'Supply', 'Market Cap'
  ].map(header => <th>{header}</th>);
  let tableRows = [];
  for (let i=0; i<props.prices.length; i++) {
    tableRows.push(
      <tr onClick={(e) => props.onClick(e, i)}>
        <td>{props.names[i].name}</td>
        <td>{props.names[i].symbol}</td>
        <td>{props.prices[i].price}</td>
        <td>{props.prices[i].change}</td>
        <td>{props.prices[i].volume}</td>
        <td>{props.prices[i].supply}</td>
        <td>{props.prices[i].cap}</td>
      </tr>
    )
  }

  return (
    <table>
        <thead>
          <tr>
            {tableHeaders}
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
  )
}

export default Table;