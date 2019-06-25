import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
}

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
};

    handleLoginSubmit = e => {
        e.preventDefault()
        axios
        .get('')
                .then((res) => {
                    if (!axios.get(res.username) && !axios.get(res.password)) {
                        this.setState({ loggedin: false });
                    } else {
                        this.setState({ loggedin: true });
                    }
                })
        window.location.reload();
};

    render() {
        return (
        <form className="login" onClick={this.handleLoginSubmit}> 
            <h1>Split The Bill!</h1>
            <h3>Log In</h3>
            <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            />
            <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            />
            <button type='submit'>
            Login
            </button>
            
            <h3>Need an Account?</h3>
            <button >
            <NavLink to='/signup'>
                Sign Up
            </NavLink>
            </button>
        </form>
    );
}
}

export default Login;