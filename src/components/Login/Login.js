import React, { Component } from 'react';
import logo from './logo.PNG';
// import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: "",
            password: ""
        }
    }



    render() {
        return (
        <div className="login-container">
            <img className="company-logo" src={logo} alt=""/>
            <form>
                <div>
                    <label>User Name:</label>
                </div>
                <div>
                    <label>Password:</label>
                </div>

                <button>
                    Login
                </button>
                <button>
                    Sign Up
                </button>

            </form>
            
        </div>
        )
    }
}
