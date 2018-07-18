import React from 'react';
import logo from './logo.svg';
import './NavExpand.css';


const NavExpand = props => {
    return (
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        /* <div class="searchBar"> */
          <input aria-invalid="false" aria-required="false" class="searchBar" placeholder="Search" type="text" aria-label="Search" value="">
          <button class="icon"><i class="glyphicon glyphicon-search"></i></button></input>
        /* </div> */
          <a href="Home.js">Home</a>
          <a href="#">Exchange</a>
          <a href="#">Invest</a>
          <a href="main.html">Notifications</a>
          <a href="#">Manage</a>
      </div>
    );
}


export default NavExpand;