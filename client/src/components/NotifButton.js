import React from 'react';
import Notifications from '../pages/Notifications';
import crypto from '../util/crypto';
//import axios from from 'axios';
import './NotifButton.css';

class NotifButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        dropdown: false
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleAllRead = this.handleAllRead.bind(this)
    }
    handleClick () {
      this.setState({
        dropdown: !this.state.dropdown
       });
    }
    handleAllRead () {
      // replacing unreadNotifications: false, 
      this.props.notificationManager.clearUnreadNotifications();
      this.setState({
        dropdown: false
       });
    }
    render() {
      return (
        <span>
          <button className="btn btn-primary" onClick={this.handleClick}>
            {this.props.unreadNotifFlag ? "You've got notifications!":<i className="material-icons">&#xe7f4;</i>}
          </button>
          <div className="nav-notifications">
          {
            this.state.dropdown && 
            <Notifications 
              notificationManager = {this.props.notificationManager}
              marketDisplay = {this.props.marketDisplay}
              coinHistory = {this.props.coinHistory}
              onMarkedNotificationsRead={this.handleAllRead} 
              unreadNotifs={this.props.unreadNotifFlag}
              isButton={true}
            />
          }
          </div>

        </span>)
    }
}
export default NotifButton;      

