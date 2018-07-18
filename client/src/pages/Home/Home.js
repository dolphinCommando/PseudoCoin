import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      sideNav: !this.state.sideNav
    })
  }
  render() {
    return ( 
      <div className="sidenav">
        <h1 onClick={this.handleClick}>Home </h1>
        {this.state.sideNav && "sideNav"}
      </div>  
    );
  }
}
export default Home;