import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import NotifButton from './components/NotifButton';
import Home from './pages/Home';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Trade from './pages/Trade';
import Notifications from './pages/Notifications';
import BrowserNotifications from './util/browserNotifications';
import Crypto from './util/crypto';
import './App.css';
import Notifications1 from './pages/Notifications1';
//import './NotifButton.css';

class App extends Component {
  COINS = [
    'BTC', 'ETH', 'LTC', 'XRP', 'BCH',
    'XMR', 'ZEC', 'DASH', 'ETC', 'USDT', 
    'EOS', 'XLM', 'ADA', 'TRX', 'NEO'];
  COIN_NAMES = [
  'Bitcoin', 'Ethereum', 'Litecoin', 'Ripple', 'Bitcoin Cash',
  'Monero', 'Zcash', 'Dash', 'Ethereum Classic', 
  'Tether', 'EOS', 'Stellar', 'Cardano', 'TRON', 'NEO'
  ];
  state = {
      currentData: {}
  };
  constructor(props) {
    super (props);
    
    this.state = {
      notifications: [<Crypto/>],
      // this class contains the methods to access and modify the notification list
      //   the notification list should only be accessed or modified through this interface
      notificationManager:{
        // this method counts the unread notifications
        isUnreadNotifications: function() {
          // make a copy of the notification array so state 
          //   is not accidentally modified elsewhere
          return (this.state.notifications && this.state.notifications.length>0);
        }.bind(this), //####### remember to bind to this object or it won't work

        // this method counts the unread notifications
        countUnreadNotification: function() {
          // make a copy of the notification array so state 
          //   is not accidentally modified elsewhere
          return this.state.notifications.length;
        }.bind(this), //####### remember to bind to this object or it won't work

        // this method gets a copy of the unread notifications
        getNotifications: function() {
          // make a copy of the notification array so state 
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

  getMarketData = (sym)=>{
    this.state.notificationManager.addNotifications([
    crypto.marketDisplay(sym, (data)=>{
        console.log(data);
        this.setState({
            currentData:data
        })
    })
  ])  
 }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="container">
          <div className="row align-items-center">
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
          <br />Use the side bar for navigation to the home page, checking your wallet, transacting trades, and notifications.
        </p>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/wallet" component={Wallet} />
              {/* using the render method so we can pass in the  notificationManager as a property */}
              <Route exact path="/notifications" render={()=><Notifications notificationManager = {this.state.notificationManager} isButton={false}/>} />
              <Route exact path="/trade" component={Trade} />
              <Route exact path="/notifications-ex" render = {()=> <Notifications1 notificationManager = {this.state.notificationManager}/>} />
              {/*<Route exact path="/notifications" component={Notifications} /> */}
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
