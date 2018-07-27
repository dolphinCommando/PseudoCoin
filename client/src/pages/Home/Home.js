import React from 'react';
import './Home.css';
import ChartTable from '../../components/ChartTable';
import Sidebar from '../../components/Sidebar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false,
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
    return (
      <div> 
      <ChartTable />
      </div>
    );
  }
}
export default Home;