import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import logo from './LogoMakr_6LhWUg.png';
import blockchain from './blockchain.jpg';
import Sidebar from './components/Sidebar';
import NotifButton from './components/NotifButton';
import ProtectedRoute from './components/ProtectedRoute';
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
    'Tether', 'EOS', 'Stellar', 'Cardano', 'TRON', 'NEO'];
  state = {
      currentData: {}
  };
  constructor(props) {
    super (props);
    
    this.state = {
      notifications: [],
      // this class contains the methods to access and modify the notification list
      //  the notification list should only be accessed or modified through this interface
      notificationManager:{
        // this method counts the unread notifications
        isUnreadNotifications: function() {
          return (this.state.notifications && this.state.notifications.length>0);
        }.bind(this),

        // this method counts the unread notifications
        countUnreadNotification: function() {
          return this.state.notifications.length;
        }.bind(this),

        // this method gets a copy of the unread notifications
        getNotifications: function() {
          console.log('getNotifications(): notifications = ', this.state.notifications)
          return Object.assign([], this.state.notifications);
        }.bind(this),

        // this method adds a single notification
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
        }.bind(this),

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
        }.bind(this),

        // this method clears the notification list
        clearUnreadNotifications: function() {
          this.setState({notifications:[]});
        }.bind(this)
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
        <div className="container">
          <div className="row align-items-center justify-content-left">
            <div className="mr-4"><Sidebar /></div>
            <div>
              <NotifButton notificationManager = {this.state.notificationManager}/>
            </div>
          </div>
        </div>  
        <header className="App-header jumbotron">
          <img src={logo} className="App-icon" alt="icon" />
          <p className="App-intro lead">
            Welcome to PseudoCoin! Click on a coin name below to see its most recent  performance.
            <br />Use the side bar for navigation to the the home page, checking your wallet, transacting trades, and notifications.
          </p>
        </header>

        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login}/>
              <ProtectedRoute exact path="/profile" component={Home} />
              <ProtectedRoute exact path="/profile/wallet" component={Wallet} />
              <ProtectedRoute exact path="/profile/notifications" render={()=><Notifications notificationManager = {this.state.notificationManager} isButton={false}/>} />
              
              <ProtectedRoute exact path="/profile/trade" component={Trade} /> 
              <ProtectedRoute exact path="/profile/notifications-ex" render = {()=> <Notifications1 notificationManager = {this.state.notificationManager}/>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
