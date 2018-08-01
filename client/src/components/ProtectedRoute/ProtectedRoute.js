import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    loggedIn: this.checkCookie()
  }
  this.authenticate = this.authenticate.bind(this)
}

getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

checkCookie = () => {
  var username = this.getCookie("pseudocoinUser");
  console.log('cookie username: ' + username);
  if (username !== "") {
      return username;
  } else {
      return 0;
  }
}

  authenticate = () => {
    if (this.checkCookie()) {
      this.setState({
        loggedIn: true
      })
    }
    else {
      this.setState({
        loggedIn: false
      })
    }
  }
  componentDidMount() {
    this.authenticate();
  }

  render() {
    const { component: Component, ...props } = this.props
    console.log('Logged in ' + this.state.loggedIn)
    return (
      <Route 
        {...props} 
        render={props => (
          this.state.loggedIn ?
            <Component {...props} /> :
            <Redirect to='/' />
        )} 
      />
    )
  }
}

export default ProtectedRoute;