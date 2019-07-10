import React from "react";
import { connect } from "react-redux";
import { signUp } from '../../actions/signUp';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const SignupDiv = styled.div`
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

const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
`

const SignupInputUser = styled.input`
    outline: none;
    font-size: 28px;
    margin-left: 10%;
    margin-right: 10%;
    background-color: #ffc038;
    border-style: none;
    border-bottom: 2px black solid;
`

const SignupInputPass = styled.input`
    outline: none;
    margin-top: 12px;
    margin-left: 10%;
    font-size: 28px;
    margin-right: 10%;
    background-color: #ffc038;
    border-style: none;
    border-bottom: 2px black solid;   
`

const SignupButton = styled.button`
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

const LoginButton = styled.button`
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

const LoginDiv = styled.div`
    width: 100%;
    margin-top: 26px;
`

const SignupLogo = styled.img`
    height: 100px;
`

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
        setTimeout(() => this.signupChecker(), 2000) 
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
        <SignupDiv>
            <SignupLogo src='../../logo.png' alt='logo' />
            <h2>SIGNUP</h2>  
            <SignupForm onSubmit={this.handleSubmit}>
            <SignupInputUser
            placeholder='Username'
            name="username"
            onChange={this.handleChange}
            value={this.state.credentials.username}
            />
            <SignupInputPass
            placeholder='Password'
            name="password"
            type='password'
            onChange={this.handleChange}
            value={this.state.credentials.password}
            />{" "}
        <SignupButton type='submit'>Signup</SignupButton>

        <LoginDiv>
            <h2>Have an Account?</h2>
                <LoginButton>
                    <NavLink to="/login" style={{ textDecoration: 'none', color: 'white'}}>
                        Login
                    </NavLink>
                </LoginButton>
            </LoginDiv>
        </SignupForm>
    </SignupDiv>
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