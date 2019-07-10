import React from "react";
import { connect } from "react-redux";
import { logIn } from '../../actions/logIn';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LoginDiv = styled.div`
    color: white;
    margin-top: 10%;
    border: 2px white solid;
    height: 100%;
    width: 500px;
    border-radius: 10px;
    margin-left: 36%;
    background-color: #ffc038;
    text-align: center;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`

const LoginInputUser = styled.input`
    outline: none;
    font-size: 28px;
    margin-left: 10%;
    margin-right: 10%;
    background-color: #ffc038;
    border-style: none;
    border-bottom: 2px black solid;
`

const LoginInputPass = styled.input`
    outline: none;
    margin-top: 12px;
    margin-left: 10%;
    font-size: 28px;
    margin-right: 10%;
    background-color: #ffc038;
    border-style: none;
    border-bottom: 2px black solid;   
`

const LoginButton = styled.button`
    margin-top: 24px;
    height: 28px;
    width: 350px;
    margin-left: 15%;
    background-color: #2c3338;
    color: white;
    border-style: none;
    border-radius: 4px;
        &:hover {
            background-color: #ffc038;
            border: 2px black solid;
            cursor: pointer;
    }     
`

const SignupButton = styled.button`
    height: 28px;
    width: 350px;
    background-color: #2c3338;
    margin-bottom: 14px;
    color: white;
    border-style: none;
    border-radius: 4px;
        &:hover {
        background-color: #ffc038;
        border: 2px black solid;
        cursor: pointer;
    }     
`

const SignupDiv = styled.div`
    width: 100%;
    margin-top: 26px;
`

const LoginLogo = styled.img`
    height: 100px;
`

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
        setTimeout(() => this.loginChecker(), 2000) 
        } else {
            alert('An input was left blank')
        }
        
};

    loginChecker = () => {
        if(this.props.isLoggedIn){
            this.props.history.push('/')
        } else {
            alert('Login Failed')
        }
}

    render() {
        console.log(this.state);
        return (
            <LoginDiv>
            <LoginLogo src='../../logo.png' alt='logo' />
            <h2>LOGIN</h2>  
            <LoginForm onSubmit={this.login}>
            <LoginInputUser
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
        />

            <LoginInputPass
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
        />

            <div />
            {this.props.error && <p className="error">{this.props.error}</p>}

        <LoginButton type='submit'>
            Login
        </LoginButton>

                <SignupDiv>
                <h2>Need an Account?</h2>
                <SignupButton>
                    <NavLink to="/signup" style={{ textDecoration: 'none', color: 'white'}}>Sign Up</NavLink>
                </SignupButton>
                </SignupDiv>
        
        </LoginForm>
        
    </LoginDiv>
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