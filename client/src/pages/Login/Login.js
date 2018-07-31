import React, { Component } from 'react';
import './Login.css';

const Login = props => {
    return (
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
                            <div className="col-lg-8">
                            <div className="login-form">
                                <form action="form">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <label for="uname-input"><b>Username</b></label>
                                                <br/>
                                                <input type="text" placeholder="Jon Snow" name="uname-input" required />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <label for="psw-input"><b>Password</b></label>
                                                <br/>
                                                <input type="password" placeholder="Winter is Coming" name="psw-input" required />
                                            </div>
                                        </div>
                                        <br/>
                                        <button type="submit" className="w3-button w3-red w3-round-large w3-round-size">Login</button>
                                        <label for="remember-input"></label>
                                        <br/>
                                        <input type="checkbox" checked="checked" name="remember-input"/> Remember me
                                    </div>
                                    <br/>
                                    <div className="container" styles="background-color:#f1f1f1">
                                        <button type="button" className="cancelbtn w3-button w3-red w3-round-large w3-round-size">Cancel</button>
                                        <br/>
                                        <span className="psw">Forgot <a href="#">password?</a></span>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    ) 
}

export default Login;

