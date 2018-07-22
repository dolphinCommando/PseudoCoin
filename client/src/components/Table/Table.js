import React from 'react';
import './Table.css';
import mockData from '../../data/mockData';

const Table = (props) => {
  const tableHeaders = ['Name', 'Symbol', 'Price (USD)', 'Change (24h)'].map(header => <th>{header}</th>);
  let tableRows = [];
  for (let i=0; i<mockData.coins.length; i++) {
    tableRows.push(
      <tr onClick={(e) => props.onClick(e, i)}>
        <td>{mockData.coins[i].name}</td>
        <td>{mockData.coins[i].price}</td>
        <td>{mockData.coins[i].percent}</td>
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