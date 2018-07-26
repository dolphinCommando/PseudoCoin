import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import NavExpand from './components/NavExpand';
import NotifButton from './components/NotifButton';
import Home from './pages/Home';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Notifications from './pages/Notifications';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PseudoCoin
            <i className="fa fa-dollar">&#xf155;</i>
            <NotifButton />
          </h1>  
        </header>
        <p className="App-intro jumbotron">
          Welcome to PseudoCoin! Click on the coin name below to see the most recent performance.
          <br />Use side bar for subscriptions, manage, user profile, and notifications
        </p>
        <NavExpand />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/wallet" component={Wallet} />
              <Route exact path="/notifications" component={Notifications} />
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
