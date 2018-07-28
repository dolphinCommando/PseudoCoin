import React from 'react';
import './Notifications.css';

class Notifications extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        let notifsLi = this.props.unreadNotifs.map(notif => {
            return(<li>{notif.message}</li>)
        })
        let notificationList = 
        <ul>
            <li className="header-notifs active">
            <i className="material-icons">&#xe7f4;</i>
            <ul className="dropdown-notifs"> 
                <li className="dropdown-notifs-title"> 
                    <button onClick={this.props.onMarkedNotificationsRead}>Mark All As Read</button>
                </li>
                {notifsLi}  
                <li className="dropdown-notifs-see-all">
                    <a href="/notifications">See All Notifications</a>
                </li>
            </ul>
            </li>
        </ul>
        return (   
        <nav className="header-nav-dropdown">
            <h3>Notifications</h3>
            {this.props.unreadNotifs.length ? notificationList : <h4>List is Empty</h4>}
                
        </nav>
    );
  }  
}   

export default Notifications;