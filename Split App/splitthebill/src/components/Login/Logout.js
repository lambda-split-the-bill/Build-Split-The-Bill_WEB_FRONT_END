import React from "react";
import styled from 'styled-components';

const LogoutButton = styled.button`
        margin: 0px 25px 0px 20px;
        text-decoration: none;
        color: black;
        text-align: center;
        font-size: 1.2rem;
        background-color: #ffc038;
        padding: 10px 15px;
        border-radius: 5px;
        font-weight: 100;
        border: none;
        cursor: pointer;
`

class Logout extends React.Component {
    
    logout() {
        localStorage.clear();
        window.location.href = '/login';
    }
    
    render() {
        return (
            <LogoutButton
            onClick={this.logout}>
                Log Out
            </LogoutButton>
        )
    }
}

export default Logout;