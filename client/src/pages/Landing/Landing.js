import React from 'react';
import './Landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">PseudoCoin</h1>
          <p class="lead">A cryptocurrency trading simulator</p>
          <hr class="my-4" />
          <p>Login to start investing!</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="/auth/login" role="button">Login</a>
          </p>
        </div>      
      </div>
    )
  }
}

export default Landing;