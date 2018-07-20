import React from 'react';
//import logo from '../../logo.svg';
import './NavExpand.css';


const NavExpand = props => {
    return (
      <div id="mySidenav" class="sidenav">
        <a href="" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="searchBar">
          <input aria-invalid="false" aria-required="false" class="searchBar" placeholder="Search" type="text" aria-label="Search" value="">
          </input>
          <button class="icon"><i class="glyphicon glyphicon-search"></i></button>
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