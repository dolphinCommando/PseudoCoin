import React from 'react';
import Notifications from '../pages/Notifications';

class NotifButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        unreadNotifications: false,
        dropdown: false
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
        unreadNotifications: !this.state.unreadNotifications, 
        dropdown: false
       })
    }
    render() {
        if (this.state.unreadNotifications) {
            return (
            <div>
              <button onClick={this.handleClick}>You've got notifications!</button>
              {this.state.dropdown && <Notifications onMarkedNotificationsRead={this.handleAllRead} />}
            </div>)
        } else {
            return (<button><i className="material-icons">&#xe7f4;</i></button>)
        }
    }
}
export default NotifButton;      

