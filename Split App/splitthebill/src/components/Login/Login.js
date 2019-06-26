import React from "react";
import { connect } from "react-redux";
import { logIn } from '../../actions/logIn';
import { NavLink } from 'react-router-dom';

import Loader from "react-loader-spinner";


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
            this.props.logIn(this.state.credentials);
};

    render() {
        return (
            <div className="login">
            <form onSubmit={this.logIn}>
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

            <div className="flex-spacer" />
            {this.props.error && <p className="error">{this.props.error}</p>}

        <button>
            {this.props.loggingIn ? (
            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
            "Login"
            )}
        </button>

        <NavLink to="/signup">
                <button color="white" className="is-rounded">
                    <span>Sign Up</span>
                </button>
        </NavLink>



        </form>
        
    </div>
    );
}
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
});

export default connect(
    mapStateToProps,
    { logIn }
)(Login);