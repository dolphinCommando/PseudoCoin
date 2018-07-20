import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './pages/Login';
import NavExpand from './components/NavExpand';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Login />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PseudoCoin
            <i className="fa fa-dollar">&#xf155;</i>
          </h1>
          <i className="material-icons">&#xe7f4;</i>
          <Home />
          <NavExpand />
        </header>
        <p className="App-intro">
          Welcome to PseudoCoin! Click on the "Current Amount" or "Investments" section, or click on the side navigation bar for "Subscriptions", "Manage", "User Profile", or "Notifications".
        </p>
        <Home />
        <NavExpand />
      </div>
    );
  }
}

export default App;
