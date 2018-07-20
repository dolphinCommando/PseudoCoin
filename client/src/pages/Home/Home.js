import React from 'react';
import './Home.css';
import {Line} from 'react-chartjs-2';
import mockData from '../../data/data.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false,
      data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: mockData.litecoin.history,
          }]
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      sideNav: !this.state.sideNav
    })
  }
  /*
  <div className="sidenav">
        <h1 onClick={this.handleClick}>Home </h1>
        {this.state.sideNav && "sideNav"}
      </div> 
      */
  render() {
    console.log(this.state.data);
    return (
      <div> 
      <Line data={this.state.data}/>
      </div>
    );
  }
}
export default Home;