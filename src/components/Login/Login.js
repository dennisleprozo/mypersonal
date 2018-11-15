import React, { Component } from 'react';
import './login.css'
import logo from './logo.PNG';
import axios from 'axios';


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            userpassword: ""
        }
    }


    updateUserName(e) {
        this.setState({
            username: e.target.value
        })
    }
    updatePassword(e) {
        this.setState({
            userpassword: e.target.value
        })
    }


// post to database the current value of username and userpassword if not equal
    async login(){
        if(!this.state.username || !this.state.userpassword)
            return alert('Please fill out proper User Name and Password.')

        let res = await axios.post('/auth/login', {
            username: this.state.username,
            userpassword: this.state.userpassword
        })
        if (res.data.message === 'loggedIn') {
            this.props.history.push('/dashboard')
        } else {
            alert(res.data.message)
        }
    }

    async signup() {
        if(!this.state.username || !this.state.userpassword)
            return alert('Please fill out proper User Name and Password.')
        let res = await axios.post('/auth/login', {
            username: this.state.username,
            userpassword: this.state.userpassword
        })
        if (res.data.message === 'loggedIn') {
            this.props.history.push('/dashboard')
        } else {
            alert(res.data.message)
        }
    }

    render() {
        return (
        <div className="login-container">
            <img className="company-logo" src={logo} alt=""/>
            <form>
                <div>
                    <label>User Name:</label>
                    <input onChange={e => this.updateUserName(e)} type="text"/>
                </div>
                
                <div>
                    <label>Password:</label>
                    <input onChange={e => this.updatePassword(e)} type="text"/>

                </div>

                <button onClick={ () => this.login() } type="button">
                    Login
                </button>

                <button onClick={ () => this.signup() } type="button">
                    Sign Up
                </button>

            </form>
            
        </div>
        )
    }
}
