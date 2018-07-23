import React from 'react';
//import mockData from '../../data/mockData';
//import LineChart from '../LineChart';
import Table from '../Table';
import API from '../../util/API';

class ChartTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleTableClick = this.handleTableClick.bind(this);
    this.state = {
      coinNames: {},
      marketData: {}
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
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleTableClick(e, i) {
    /*
    this.setState({
      cryptoData: mockData.coins[i]
    })
    */
    console.log('Table clicked on');
  }
  /*
<LineChart 
      labels={this.state.dates} 
      label={this.state.cryptoData.name} 
      data={this.state.cryptoData.history} 
      />
  */
  render() {
    return (
    <div className="chart-table">
      <Table onClick={this.handleTableClick} names={this.state.coinNames} prices={this.state.marketData} />
    </div>
    )
  }
}

export default ChartTable;