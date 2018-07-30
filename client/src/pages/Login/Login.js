import React, { Component } from 'react';
import './Login.css';

const Login = props => {
    return (
            <div className="container expand-mobile sign-in-out">
                <div className="content auto expand-mobile">
                    <div className="signout-block expand-mobile">
                        <div className="row header">
                            <div className="login-title">
                                <h1>Member Login</h1>
                            </div>
                            <div className="login-form">
                                <form action="form">
                                    <div className="container">
                                        <div className="row">
                                            <div className="one-column inner">
                                                <label for="uname-input"><b>Username</b></label>
                                                <input type="text" placeholder="Enter Username" name="uname-input" required />
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="row">
                                            <div className="one-column inner">
                                                <label for="psw-input"><b>Password</b></label>
                                                <input type="password" placeholder="Enter Password" name="psw-input" required />
                                            </div>
                                        </div>
        
                                        <button type="submit">Login</button>
                                        <label for="remember-input"></label>
                                        <input type="checkbox" checked="checked" name="remember-input"/> Remember me
                                    </div>

                                    <div className="container" styles="background-color:#f1f1f1">
                                        <button type="button" className="cancelbtn">Cancel</button>
                                        <span className="psw">Forgot <a href="#">password?</a></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    ) 
}

export default Login;

