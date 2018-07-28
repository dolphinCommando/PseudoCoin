import React from 'react';
import Notifications from '../pages/Notifications';

class NotifButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        unreadNotifications: false,
        dropdown: false,
        notifications: [
        {
          message: "Your stock went up!",
          unread: true
        },
        {
          message: "Your Bitcoin stock decreased today.",
          unread: true
        }
      ]
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleAllRead = this.handleAllRead.bind(this)
    }
    handleClick () {
      this.setState({
        dropdown: !this.state.dropdown
       })
    }
    handleAllRead () {
      this.setState({
        unreadNotifications: false, 
        dropdown: false,
        notifications: []
       })
    }
    render() {
      return (
        <span>
          <button onClick={this.handleClick}>
            {this.state.unreadNotifications ? "You've got notifications!":<i className="material-icons">&#xe7f4;</i>}
          </button>
          {this.state.dropdown && <Notifications onMarkedNotificationsRead={this.handleAllRead} unreadNotifs={this.state.notifications}/>}
        </span>)
    }
}
export default NotifButton;      

