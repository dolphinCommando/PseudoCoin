import React from 'react';
//import mockData from '../../data/mockData';
import LineChart from '../LineChart';
import Table from '../Table';
import API from '../../util/API';
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
    API
      .getCryptoData()
      .then(response => {
        //console.log(JSON.stringify(response));
        this.setState({
          coinNames: response.data
        });
        var arr = response.data.map(elem => elem.symbol);
        API
          .getCryptoMarket(arr)
          .then(result => {
            //console.log(JSON.stringify(result));
            this.setState({
              marketData: result.data
            })
            this.loadHistory('BTC')
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  loadHistory(symbol) {
    API.getCryptoHistoryHour(symbol).then(response => {
      let timearr = [];
      let closings = [];
      response.data.forEach(function(point) {
        timearr.push((moment.unix(point.time).format('hh:mm a MM/DD/YY')))
      })
      response.data.forEach(function(point) {
        closings.push(point.close)
      })
      this.setState({
        chartLabels: timearr,
        chartTitle: symbol,
        dataPoints: closings
      })
    }).catch(err => console.log(err));
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