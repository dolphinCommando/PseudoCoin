import React from 'react';
import './Notifications.css';
//import './src/util/crypto.js';
import axios from 'axios';
import crypto from '../../util/crypto';

class Notifications extends React.Component {
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
        currentData: []
    };
    constructor(props) {
        super(props); 
    }
    getMarketData = (sym)=>{
        crypto.marketDisplay(sym, (data)=>{
            console.log(data);
            this.setState({
                currentData:data
            })
        })

    }
    render() {
        //const CRYPTO_URL = 'https://min-api.cryptocompare.com/data/';
        
        const notificationList = this.props.notificationManager.getNotifications();
        //console.log('Notification.render(): notificationList = ', CRYPTO_URL, this.COINS, this.COIN_NAMES, notificationList);
        let notifsLi = notificationList.map(notif => {
            console.log('Notification.render(): notif = ', notif);
            return(<li key={notif.id}>{notif.message}</li>);
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
                        <div >
                            {this.COINS.map((v,i)=>{
                                return <button className="nav-button btn btn-primary mx-auto" onClick={()=>{this.getMarketData(v)}}>{this.COIN_NAMES[i]}</button>
                            })}
                            <div className="card results" styles="width: 18rem;">
                                {/* {JSON.stringify(this.state.currentData)} */}
                                {this.state.currentData.map(d => (
                                    <div>
                                        <div className="label">Symbol:</div><div className="value">{d.symbol}</div>
                                        <div className="label">Price:</div><div className="value">{d.price}</div>
                                        <div className="label">Change:</div><div className="value">{d.change}</div>
                                        <div className="label">Open:</div><div className="value">{d.open}</div>
                                        <div className="label">High:</div><div className="value">{d.high}</div>
                                        <div className="label">Low:</div><div className="value">{d.low}</div>
                                        <div className="label">Volume:</div><div className="value">{d.volume}</div>
                                        <div className="label">Supply:</div><div className="value">{d.supply}</div>
                                        <div className="label">Cap:</div><div className="value">{d.cap}</div>
                                    </div>
                                ))}  
                            </div> 
                        </div>
                        <button onClick={this.props.onMarkedNotificationsRead}>Mark All As Read</button>
                    </li> 
                    <li className="dropdown-notifs-see-all">
                        <a href="/notifications-ex">See All Notifications</a>
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

export default Notifications;