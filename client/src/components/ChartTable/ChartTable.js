import React from 'react';
import mockData from '../../data/mockData';
import LineChart from '../LineChart';
import Table from '../Table';
class ChartTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleTableClick = this.handleTableClick.bind(this);
    this.state = {
      cryptoData: {},
    }
  }
  componentDidMount() {
    this.setState({
      cryptoData: mockData.coins[0]  
    });
  }

  handleTableClick(e, i) {
    this.setState({
      cryptoData: mockData.coins[i]
    })
  }

  render() {
    return (
    <div className="chart-table">
      <LineChart 
      labels={mockData.dates} 
      label={this.state.cryptoData.name} 
      data={this.state.cryptoData.history} 
      />
      <Table onClick={this.handleTableClick} />
    </div>
    )
  }
}

export default ChartTable;