import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import Login from './pages/Login';
import NavExpand from './components/NavExpand';
import NotifButton from './components/NotifButton';
import Home from './pages/Home';
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
          Welcome to PseudoCoin! Click on the "Current Amount" or "Investments" section, or click on the side navigation bar for "Subscriptions", "Manage", "User Profile", or "Notifications".
        </p>
        <NavExpand />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/exchange" component={Exchange} />
              <Route exact path="/invest" component={Invest} />
              <Route exact path="/notifications" component={Notifications} /> */}
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
