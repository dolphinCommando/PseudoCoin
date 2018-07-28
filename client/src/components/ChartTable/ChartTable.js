import React from 'react';
//import mockData from '../../data/mockData';
import LineChart from '../LineChart';
import Table from '../Table';
import crypto from '../../util/crypto';
import moment from 'moment';

class ChartTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleTableClick = this.handleTableClick.bind(this);
    this.loadHistory = this.loadHistory.bind(this);
    this.state = {
      coinNames: {},
      marketData: {},
      dataPoints: [],
      chartTitle: '',
      chartLabels: []
    }
  }
  componentDidMount() {
    var recCoins = crypto.recommendedCoins()
    this.setState({
      coinNames: recCoins
    });
    var arr = recCoins.map(elem => elem.symbol);
    crypto.marketDisplay(arr, market => {
      this.setState({
        marketData: market
      })
    });
    this.loadHistory('BTC')
  }
  loadHistory(symbol) {
    crypto.coinHistory(symbol, history => {
      console.log('History: ' + history)
      let timearr = [];
      let closings = [];
      history.forEach(function(point) {
        timearr.push((moment.unix(point.time).format('hh:mm a MM/DD/YY')))
      })
      history.forEach(function(point) {
        closings.push(point.close)
      })
      this.setState({
        chartLabels: timearr,
        chartTitle: symbol,
        dataPoints: closings
      })
    }); 
  }

  handleTableClick(e, sym) {
    this.loadHistory(sym)
  }
 
  render() {
    return (
    <div className="chart-table">
      <LineChart 
      labels={this.state.chartLabels} 
      label={this.state.chartTitle} 
      data={this.state.dataPoints} 
      />
      <Table onClick={this.handleTableClick} names={this.state.coinNames} prices={this.state.marketData} />     
    </div>
    
    )
  }
}

export default ChartTable;