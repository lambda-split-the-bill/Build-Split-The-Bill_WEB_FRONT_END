import React from 'react'
import { Route } from 'react-router-dom';

import Friend from './Friend'

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: {
                name: '',
                email: ''
            }
    }
}

    addFriend = e => {
        e.preventDefault();
        this.setState({ 
            friend: {
                name: this.state.name, 
                email: this.state.email
    }})}

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
};
    
    render() {
        return(
            <div className='friendform'>
                <form onSubmit={this.addFriend}>
                    <input
                    placeholder='Add A Friend'
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange} />
                    <input
                    placeholder='E-Mail'
                    type='text'
                    name='email'
                    value={this.state.email} 
                    onChange={this.handleChange} />
                    <button type='submit'><i className="fas fa-user-plus"></i></button>
                </form>
                
                <Route exact path='/'
                render={props => <Friend {...props} friend={this.state.friend} />}
        />
            </div>
        )
    }
}

export default FriendForm; 