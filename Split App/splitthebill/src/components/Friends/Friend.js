import React from 'react';
import { deleteFriend } from '../../actions/friend';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DeleteButton = styled.button`
    margin: 0px 25px 0px 12px;
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: .8rem;
    background-color: #ffc038;
    padding: 8px 10px;
    border-radius: 5px;
    font-weight: 100;
    border: none;
    height: 40px;
    cursor: pointer;
`

const FriendDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-flow: row;
    align-items: center;
    max-width: 450px;
`

class Friend extends React.Component {
    
    render() {
    return ( 
        <FriendDiv>  
        <h1>{this.props.friend.name}</h1>
        <DeleteButton onClick={() => this.props.deleteFriend(this.props.friend.id)}>
            Delete
        </DeleteButton>
    </FriendDiv>
)}
};

const mapStateToProps = () => {
    return {}
}

export default connect(
    mapStateToProps,
    { deleteFriend }
)(Friend);