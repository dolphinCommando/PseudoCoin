import React from 'react';
import logo from './logo.svg';
import './NavExpand.css';
import './Wallet.css';

class Wallet extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="searchBar">
          <input aria-invalid="false" aria-required="false" className="searchBar" placeholder="Search" type="text" aria-label="Search" value=""></input>
          <button className="icon"><i className="glyphicon glyphicon-search"></i></button>
        </div>
      )
    }  

}