import React, { Component } from 'react';
import logo from './logo.svg';
import './Notifications.css';

// When clicked on the Notifications favicon:

// $('.material-icons').click(function() {

// });
    document.getElementById("notifsButton").onclick = function () {
        <nav className="header-nav-dropdown">
            <ul>
                <li className="header-notifs active">
                <i className="material-icons">&#xe7f4;</i>
                <ul className="dropdown-notifs"> 
                    <li className="dropdown-notifs-title">
                        <h3>Notifications</h3>
                        <a href="/">Mark All As Read</a>
                    </li>
                    <li>
                        <a href="/"></a>
                    </li>    
                    <li>
                        <a href="/"></a>
                    </li> 
                    <li>
                        <a href="/"></a>
                    </li> 
                    <li>
                        <a href="/"></a>
                    </li>
                    <li>
                        <a href="/"></a>
                    </li>  
                    <li className="dropdown-notifs-see-all">
                        <a href="/notifications">See All Notifications</a>
                    </li>
                </ul>
                </li>
            </ul>    
        </nav>
        location.href = "/notifications";
    };
