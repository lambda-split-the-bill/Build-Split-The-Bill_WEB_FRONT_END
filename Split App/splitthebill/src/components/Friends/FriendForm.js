import React from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../../actions/friend';
import styled from 'styled-components';

const FriendFormDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-flow: row;
    align-items: center;
    max-width: 450px;
    padding-left: 63px;
`

const AddInput = styled.input`
    outline: none;
    font-size: 28px;
    background-color: #2C3338;
    border-style: none;
    color: white;
    border-bottom: 2px black solid;
`

const AddButton = styled.button`
    outline: none;
    font-size: 28px;
    margin-left: 3%;
    margin-right: 10%;
    background-color: #ffc038;
    border-style: none;
    border-bottom: 2px black solid;
    border-radius: 4px;
    cursor: pointer;
`

const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row;
    align-items: center;
    max-width: 450px;
    padding-left: 40px;
`


class FriendForm extends React.Component {
    constructor(props) {
        super(props);    
            this.state = {
                friend: {
                    name: '',
                    email: ''
                }
    }
}

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
    }});
};

    handleSubmit = e => {
        e.preventDefault()
        this.props.addFriend(this.state.friend);
        this.setState({
            friend:{
                name: '',
                email: ''
    }})      
};
    
    render() {
        return(
            <>
            <TitleDiv>
                <h2>Friend List!</h2>
            </TitleDiv>

            <FriendFormDiv>
                <form onSubmit={this.handleSubmit}>
                    <AddInput
                    placeholder='Add A Friend'
                    type='text'
                    name='name'
                    value={this.state.friend.name}
                    onChange={this.handleChange} />
                    
                    <AddInput
                    placeholder='E-Mail'
                    type='text'
                    name='email'
                    value={this.state.friend.email} 
                    onChange={this.handleChange} />
                    <AddButton type='submit'><i className="fas fa-user-plus"></i></AddButton>
                </form>
            </FriendFormDiv>
            </>
        )
    }
}


export default connect(
    null,
    { addFriend }
)(FriendForm);