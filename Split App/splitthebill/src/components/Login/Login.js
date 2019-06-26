import React from "react";
import { connect } from "react-redux";
import { logIn } from '../../actions/logIn';
import { NavLink } from 'react-router-dom';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
    }
};

    handleChange = e => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
    }
    });
};

    login = e => {
        e.preventDefault();
        if(this.state.credentials.username.length > 0 && this.state.credentials.password.length > 0) {
        this.props.logIn(this.state.credentials);
        } else {
            alert('An input was left blank')
        }
        setTimeout(() => this.loginChecker(), 1000) 
};

    loginChecker = () => {
        if(this.props.isLoggedIn){
            this.props.history.push('/home')
        } else {
            alert('Login Failed')
        }
}

    render() {
        console.log(this.state);
        return (
            <div className="login">
            <form onSubmit={this.login}>
            <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
        />

            <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
        />

            <div />
            {this.props.error && <p className="error">{this.props.error}</p>}

        <button type='submit'>
            Login
        </button>

                <h2>Need an Account?</h2>
                <button>
                    <NavLink to="/signup">Sign Up</NavLink>
                </button>
        
        </form>
        
    </div>
    );
}
}

const mapStateToProps = state => {
    console.log(state);
    return {
        fetchingUser: state.login.fetchingUser,
        isLoggedIn: state.login.isLoggedIn
};
};

export default connect(
    mapStateToProps,
    { logIn }
)(Login);