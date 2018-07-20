import React, { Component } from 'react';
import logo from './logo.svg';
import './login.css';

class Login extends Component {
    render() {
        return(
            <div className="container expand-mobile sign-in-out">
                <div className="content auto expand-mobile">
                    <div className="signout-block expand-mobile">
                        <div className="row header">
                            <div id="login-title">
                                <h1>Member Login</h1>
                            </div>
                            <div className="login-form">
                                <form action="">
                                    <div class="container">
                                        <label for="uname"><b>Username</b></label>
                                        <input type="text" placeholder="Enter Username" name="uname" required>

                                        <label for="psw"><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" required>
        
                                        <button type="submit">Login</button>
                                        <label>
                                            <input type="checkbox" checked="checked" name="remember"> Remember me
                                        </label>
                                    </div>

                                    <div class="container" style="background-color:#f1f1f1">
                                        <button type="button" class="cancelbtn">Cancel</button>
                                        <span class="psw">Forgot <a href="#">password?</a></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}