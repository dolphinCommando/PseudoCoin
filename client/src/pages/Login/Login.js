import React, { Component } from 'react';
import './Login.css';

const Login = props => {
    return (
            <div className="container expand-mobile sign-in-out">
                <div className="content auto expand-mobile">
                    <div className="signout-block expand-mobile">
                        <div className="row header">
                            <div className="login-title">
                                <h2>Login with your Google account</h2>
                            </div>
                            <div className="login-form">
                                <form>
                                    <div className="container">
                                        <a href="auth/google" className="btn btn-primary btn-lg" role="button">Login With Google</a>
                                    </div>

                                    <div className="container">
                                        <a href="/" className="btn btn-warning btn-lg" role="button">Cancel</a>
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

