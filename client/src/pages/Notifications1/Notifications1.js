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
    'Tether', 'EOS', 'Stellar', 'Cardano', 'TRON', 'NEO'];
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
  render() {
    const notificationList = this.props.notificationManager.getNotifications();

    let notifsLi = notificationList.map(notif => {
      console.log('Notification.render(): notif = ', notif);
      return(<li key={notif.id}>{notif.message}</li>);
  });
    return (
      <div className="container expand-mobile sign-in-out">
        <div className="content auto expand-mobile">
            <div class="row header">
                <div class="col-12">
                    <div class="notifications-title">
                        <h1 class="notifications-title">Notifications</h1>
                    </div>
                </div>
                <br/>
        <div class="col-lg-12">
        {notifsLi}
        {this.COINS.map((v,i)=>{
            return <button className="nav-button btn btn-primary mx-auto" onClick={()=>{this.getMarketData(v)}}>{this.COIN_NAMES[i]}</button>
        })}
        {this.state.currentData.map(d => (
            <div className="card results" styles="width: 18rem;">
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
        </div> 
      </div>
    );
  }
}
export default Notifications1;