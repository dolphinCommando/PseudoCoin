import React from 'react';
import './Notifications.css';

class Notifications extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (   
        <nav className="header-nav-dropdown">
            <ul>
                <li className="header-notifs active">
                <i className="material-icons">&#xe7f4;</i>
                <ul className="dropdown-notifs"> 
                    <li className="dropdown-notifs-title">
                        <h3>Notifications</h3>
                        <button onClick={this.props.onMarkedNotificationsRead}>Mark All As Read</button>
                    </li>
                    <li>
                        <a href="/"></a>
                    </li>    
                    <li>
                        <a href="/"></a>
                    </li> 
                    <li>
                        <a href="/"></a>
                    </li> 
                    <li>
                        <a href="/"></a>
                    </li>
                    <li>
                        <a href="/"></a>
                    </li>  
                    <li className="dropdown-notifs-see-all">
                        <a href="/notifications">See All Notifications</a>
                    </li>
                </ul>
                </li>
            </ul>    
        </nav>
    );
  }  
}   

export default Notifications;