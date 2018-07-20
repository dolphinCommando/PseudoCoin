import React from 'react';
//import logo from '../../logo.svg';
import './NavExpand.css';


const NavExpand = props => {
    return (
      <div id="mySidenav" className="sidenav">
        <a href="" className="closebtn" onClick="closeNav()">&times;</a>
        <div className="searchBar">
          <input aria-invalid="false" aria-required="false" className="searchBar" placeholder="Search" type="text" aria-label="Search" value="">
          </input>
          <button className="icon"><i className="glyphicon glyphicon-search"></i></button>
          </div> 
          <a href="/">Home</a>
          <a href="/exchange">Exchange</a>
          <a href="/invest">Invest</a>
          <a href="/notifications">Notifications</a>
          <a href="/manage">Manage</a>
      </div>
    );
}


export default NavExpand;