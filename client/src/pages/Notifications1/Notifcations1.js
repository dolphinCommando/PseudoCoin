import React from 'react';
import '../Home/Home.css';
import axios from 'axios';
import crypto from '../../util/crypto';


class Notifications1 extends React.Component {

  COINS = [
    'BTC', 'ETH', 'LTC', 'XRP', 'BCH',
    'XMR', 'ZEC', 'DASH', 'ETC', 'USDT', 
    'EOS', 'XLM', 'ADA', 'TRX', 'NEO'];
COIN_NAMES = [
'Bitcoin', 'Ethereum', 'Litecoin', 'Ripple', 'Bitcoin Cash',
'Monero', 'Zcash', 'Dash', 'Ethereum Classic', 
'Tether', 'EOS', 'Stellar', 'Cardano', 'TRON', 'NEO'
];
  constructor(props) {
    super(props);
    this.state = {
      currentData: []
    }
  }

  getMarketData = (sym)=>{
    crypto.marketDisplay(sym, (data)=>{
        console.log(data);
        this.setState({
            currentData:data
        })
    })

}
  /*
  <div className="sidenav">
        <h1 onClick={this.handleClick}>Home </h1>
        {this.state.sideNav && "sideNav"}
      </div> 
      */
  render() {
    const notificationList = this.props.notificationManager.getNotifications();

    let notifsLi = notificationList.map(notif => {
      console.log('Notification.render(): notif = ', notif);
      return(<li key={notif.id}>{notif.message}</li>);
  });
    return (
      <div>
        {notifsLi}
        {this.COINS.map((v,i)=>{
                return <button className="nav-button btn btn-primary mx-auto" onClick={()=>{this.getMarketData(v)}}>{this.COIN_NAMES[i]}</button>
            })}
      Hello
      </div>
    );
  }
}
export default Notifications1;