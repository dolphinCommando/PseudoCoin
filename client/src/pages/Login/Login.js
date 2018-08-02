import React from 'react';
import './Login.css';
import API from '../../util/api';
import { Redirect } from 'react-router-dom';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameLogin: '',
      passwordLogin: '',
      usernameNew: '',
      passwordNew: '',
      loginErr: '',
      registerErr: '',
      redirect: false,
      redirectTo: ''
    }
    this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    this.clearState();
    this.setCookie('');
  }
  clearState() {
    this.setState({
      usernameLogin: '',
      passwordLogin: '',
      usernameNew: '',
      passwordNew: '',
      loginErr: '',
      registerErr: ''     
    })
  }
  setRedirect = (urlString) => {
    this.setState({
      redirect: true,
      redirectTo: urlString
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirectTo} />
    }
  }
  setCookie(name) {
      document.cookie = "pseudocoinUser=" + name;
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    //console.log(value);
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.usernameLogin && this.state.passwordLogin) {
      API.verifyUser(this.state.usernameLogin, this.state.passwordLogin)
      .then((record) => {
        if (record.data) {
          this.setCookie(record.data.username)
          this.setRedirect('/profile');
        }
        else {
          this.setState({
            loginErr: <p>User not found</p>
          })
        }
      })
    }
    else {
      this.setState({
        loginErr: <p>Field is empty</p> 
      })
    }
  }
/*
  handleCancel = event => {
    event.preventDefault();
    this.clearState();
  }
*/
  handleRegister = event => {
    event.preventDefault();
    if (this.state.usernameNew && this.state.passwordNew) {
        API.verifyUser(this.state.usernameNew, this.state.passwordNew)
        .then((loginRecord) => {
            if(loginRecord.data) {
                this.setState({
                    registerErr: <p>You have already registered with PseudoCoin</p>
                })
            }
            else {
                API.registerUser(this.state.usernameNew, this.state.passwordNew)
                .then((record) => {
                    this.setCookie(record.data.username)
                    this.setRedirect('/profile');
                      
                })
            }
        })
    }
    else {
        this.setState({
            registerErr: <p>Must register with both username and password</p>
        })
    }
  }

  render() {
    return (
        <div>
            {this.renderRedirect()}
            <div className="container expand-mobile sign-in-out">
                <div className="content auto expand-mobile">
                    <div className="signout-block expand-mobile">
                        <div className="row header">
                            <div className="col-12">
                                <div className="login-title">
                                    <h1 className="login-title">GAME OF DOW JONES</h1>
                                </div> 
                            </div>
                            <br/>
                            <div className="col-lg-12">
                            <div className="login-form">
                                <form action="form">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-lg-2">
                                            <h3>Login</h3>
                                                <label htmlFor="usernameLogin"><b>Username</b></label>

                                                <br/>
                                                <input type="text" placeholder="Jon Snow" onChange={this.handleInputChange}name="usernameLogin" required />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">

                                            <div className="col-lg-2">
                                                <label htmlFor="passwordLogin"><b>Password</b></label>

                                                <br/>
                                                <input type="password" placeholder="Winter is Coming" onChange={this.handleInputChange} name="passwordLogin" required />
                                            </div>
                                        </div>
                                        {this.state.loginErr}
                                        <br/>
                                        <button type="submit" className="w3-button w3-blue w3-round-large w3-round-size" onClick={this.handleLogin}>Login</button>
                                    </div>
                                </form>
                            </div>
                            <hr />
                            <div className="register-form">
                                <form action="form">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                            <h3>Register</h3>
                                                <label htmlFor="usernameNew"><b>Username</b></label>
                                                <br/>
                                                <input type="text" placeholder="Ned Stark" onChange={this.handleInputChange}name="usernameNew" required />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <label htmlFor="passwordNew"><b>Password</b></label>
                                                <br/>
                                                <input type="password" placeholder="Winter is Coming" onChange={this.handleInputChange} name="passwordNew" required />
                                            </div>
                                        </div>
                                        {this.state.registerErr}
                                        <br/>
                                        <button type="submit" className="w3-button w3-blue w3-round-large w3-round-size" onClick={this.handleRegister}>Register</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
  }
}

export default Login;

