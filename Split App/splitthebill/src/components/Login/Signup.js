import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        email: ''
    };
}

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
};

    handleLoginSubmit = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
};

    render() {
        return (
        <form className="login" onClick={this.handleLoginSubmit}>
            <h1>Split The Bill</h1>
            <h3>Sign Up Today!</h3>
            <input
            type="text"
            placeholder="E-Mail"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            />
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
            <input
            type="password"
            placeholder="Confirm Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            />
            <button type='submit'>
            Sign Up
            </button>
            <h3>Already Have an Account?</h3>
            <button >
            <NavLink to='/login'>
                Login
            </NavLink>
            </button>
        </form>
    );
}
}

export default Login;