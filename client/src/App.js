import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import NotifButton from './components/NotifButton';
import Home from './pages/Home';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Notifications from './pages/Notifications';
import BrowserNotifications from './util/browserNotifications'
import './App.css';

class App extends Component {
  constructor(props) {
    super (props);
    
    this.state = {
      notifications: [],
      // this class contains the methods to access and modify the notification list
      //   the notification list should only be accessed or modified through this interface
      notificationManager:{
        // this method counts the unread notifications
        isUnreadNofications: function() {
          // make a copy of the nofication array so state 
          //   is not accidentally modified elsewhere
          return (this.state.notifications && this.state.notifications.length>0);
        }.bind(this), //####### remember to bind to this object or it won't work

        // this method counts the unread notifications
        countUnreadNofication: function() {
          // make a copy of the nofication array so state 
          //   is not accidentally modified elsewhere
          return this.state.notifications.length;
        }.bind(this), //####### remember to bind to this object or it won't work

        // this method gets a copy of the unread notifications
        getNotifications: function() {
          // make a copy of the nofication array so state 
          //   is not accidentally modified elsewhere
          console.log('getNotifications(): notifications = ', this.state.notifications)
          return Object.assign([], this.state.notifications);
        }.bind(this), //####### remember to bind to this object or it won't work

        // this method add a single notification
        addNotification: function(message, read) {
          if(!read) BrowserNotifications.notify(message);
          console.log('addNotification() called with: message = ', message, ', read = ', read, 'state = ', this.state);
          this.setState({
            notifications: [
              ...this.state.notifications, 
              {
                message: message,
                unread: read | true
              }
            ]
          });
        }.bind(this), //####### remember to bind to this object or it won't work

        // this method add a array of notifications
        addNotifications: function(notifications, overwrite) {
          //if(!read) BrowserNotifications.notify(message);
          console.log('addNotification() called with: notifications = ', notifications, ', overwrite = ', overwrite, 'state = ', this.state);
          if(!overwrite) {
            // append case
            this.setState({
              notifications: [...this.state.notifications, ...notifications]
            });
          }
          else {
            // overwrite case
            this.setState({
              notifications: [...notifications]
            });
          }
        }.bind(this), //####### remember to bind to this object or it won't work

        // this method clears the notification list
        clearUnreadNotifications: function() {
          this.setState({notifications:[]});
        }.bind(this)//####### remember to bind to this object or it won't work
      },
    } 
  }

  componentDidMount() {

    this.state.notificationManager.addNotifications([
      {id:'1', message:'1', read:false},
      {id:'2', message:'2', read:false},
      {id:'3', message:'3', read:false}
    ]);
    // make an ajax call
    /*
    fetch('uri').then(data) {
      using data update the notification list
    }
    */
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="container">
          <div className="row align-items-start">
            <div className="col-6 col-md-4"></div>
            <div className="col-6 col-md-4">
              <NotifButton notificationManager = {this.state.notificationManager}/>
            </div>
          </div>
        </div>  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PseudoCoin
            <i className="fa fa-dollar">&#xf155;</i>  
          </h1>  
        </header>
        <p className="App-intro jumbotron">
          Welcome to PseudoCoin! Click on a coin name below to see its most recent performance.
          <br />Use side bar for login, wallet, and notifications.
        </p>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/wallet" component={Wallet} />
              {/* using the render method so we can pass in the  notificationManager as a property */}
              <Route exact path="/notifications" render={()=><Notifications notificationManager = {this.state.notificationManager}/>} />
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
