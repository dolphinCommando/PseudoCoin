import React from 'react';
import Notifications from '../pages/Notifications';

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
          <button onClick={this.handleClick}>
            {this.props.unreadNotifFlag ? "You've got notifications!":<i className="material-icons">&#xe7f4;</i>}
          </button>
          {
            this.state.dropdown && 
            <Notifications 
              notificationManager = {this.props.notificationManager}
              onMarkedNotificationsRead={this.handleAllRead} 
              unreadNotifs={this.props.unreadNotifFlag}
            />
          }
        </span>)
    }
}
export default NotifButton;      

