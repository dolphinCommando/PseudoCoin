import React from 'react';
import './Notifications1.css';
import axios from 'axios';
import crypto from '../../util/crypto';

class Notifications1 extends React.Component {
    constructor(props) {
        super(props); 
    }
    state = {
        currentData: [<crypto />]
    };
    getMarketData = (sym)=>{
        crypto.marketDisplay(sym, (data)=>{
            console.log(data);
            this.setState({
                currentData:data
            })
        })

    }
    render() {
        const notificationList = this.props.notificationManager.getNotifications();
        console.log('Notification.render(): notificationList = ', notificationList);
        let notifsLi = notificationList.map(notif => {
            console.log('Notification.render(): notif = ', notif);
            return(<li key={notif.id}>{notif.message}</li>)
        });
        let styleClass = this.props.isButton ? 'dropdown nav-container' : ' dropdown nav-container wide-width';
        let notificationView = 
        <ul>
            <div className={styleClass}>   
            <h3>Notifications</h3>
                <li className="header-notifs active">
                <ul className="dropdown-notifs"> 
                    <li className="dropdown-notifs-title">
                        {notifsLi}
                        <div className="coin-results">
                            {this.COINS.map((v,i)=>{
                                return <button className="nav-button btn btn-primary mx-auto" onClick={()=>{this.getMarketData(v)}}>{this.COIN_NAMES[i]}</button>
                            })}
                            <div class="results">
                            {/* {JSON.stringify(this.state.currentData)} */}
                            {this.state.currentData.map(d => (
                                <div>
                                    <div className="label">symbol</div><div className="value">{d.symbol}</div>
                                    <div className="label">price</div><div className="value">{d.price}</div>
                                    <div className="label">change</div><div className="value">{d.change}</div>
                                    <div className="label">open</div><div className="value">{d.open}</div>
                                    <div className="label">high</div><div className="value">{d.high}</div>
                                    <div className="label">low</div><div className="value">{d.low}</div>
                                    <div className="label">volume</div><div className="value">{d.volume}</div>
                                    <div className="label">supply</div><div className="value">{d.supply}</div>
                                    <div className="label">cap</div><div className="value">{d.cap}</div>
                                </div>
                            ))}  
                        </div> 
                        </div>
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
        <nav className="header-nav-dropdown notifications">

            {this.props.notificationManager.isUnreadNotifications() ? notificationView : <h4>List is Empty</h4>}
            
        </nav>
    );
  }  
}   
        

export default Notifications1;