import React from 'react';
//import logo from '../../logo.svg';
import './NavExpand.css';


const NavExpand = props => {
    return (
      <span id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
         <div className="searchBar"> 
            <input aria-invalid="false" aria-required="false" className="searchBar" placeholder="Search" type="text" aria-label="Search" value="" />
            <button className="icon"><i className="glyphicon glyphicon-search">&#xe003;</i></button>
         </div> 
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/wallet">Wallet</a>
          <a href="/notifications">Notifications</a>
      </span>
    );
}


export default NavExpand;
