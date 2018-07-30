import React from 'react';
import './Notifications.css';

class Notifications extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        const notificationList = this.props.notificationManager.getNotifications();
        console.log('Notification.render(): notificationList = ', notificationList);
        let notifsLi = notificationList.map(notif => {
            console.log('Notification.render(): notif = ', notif);
            return(<li key={notif.id}>{notif.message}</li>);
        });
        let notificationView = 
        <ul>
            <div className="dropdown">    
                <li className="header-notifs active">
                <ul className="dropdown-notifs"> 
                    <li className="dropdown-notifs-title">
                        {notifsLi} 
                        <button onClick={this.props.onMarkedNotificationsRead}>Mark All As Read</button>
                    </li> 
                    <li className="dropdown-notifs-see-all">
                        <a href="/notifications">See All Notifications</a>
                    </li>
                </ul>
                </li>
            </div>
        </ul>
        return (   
        <nav className="header-nav-dropdown">
            <h3>Notifications</h3>
            {this.props.notificationManager.isUnreadNotifications() ? notificationView : <h4>List is Empty</h4>}  
        </nav>
    );
  }  
}   

export default Notifications;