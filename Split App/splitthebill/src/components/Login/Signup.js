import React from "react";
import { connect } from "react-redux";
import { signUp } from '../../actions/signUp';
import { NavLink } from 'react-router-dom'


class Signup extends React.Component {
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

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.credentials.username.length > 0 && this.state.credentials.password.length > 0) {
        this.props.signUp(this.state.credentials);
        setTimeout(() => this.signupChecker(), 1000) 
        } else {
            alert('An input was left blank')
        }
        
};

    signupChecker = () => {
        if(this.props.loggedIn){
            this.props.history.push('/')
        } else {
            alert('SignUp Failed')
        }
}


    render() {
        console.log(this.state);
        return (
        <div className="Signup">
            <form onSubmit={this.handleSubmit}>
            <input
            placeholder='Username'
            name="username"
            onChange={this.handleChange}
            value={this.state.credentials.username}
            />
            <input
            placeholder='Password'
            name="password"
            type='password'
            onChange={this.handleChange}
            value={this.state.credentials.password}
            />{" "}
        <button type='submit'>Signup</button>

        <h2>Have an Account?</h2>
                <button>
                    <NavLink to="/login">Login</NavLink>
                </button>

        </form>
    </div>
    );
}
}

const mapStateToProps = state => {
    console.log(state);
    return {
        loggedIn: state.signup.loggedIn 
};
};

export default connect(
    mapStateToProps,
    { signUp }
)(Signup);