import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { addFriend } from '../../actions/friend';
import Friend from './Friend';

class FriendForm extends React.Component {
        state = {
            friend: {
                name: '',
                email: ''
            }
    }

    handleChange = e => {
        this.setState({
        ...this.state,
        [e.target.name]: e.target.value 
    })
};

    handleSubmit = e => {
        e.preventDefault();
        this.props
        .addFriend(this.state)
        .then(res => this.props.history.push('/'));
    };
    
    render() {
        return(
            <div className='friendform'>
                <form onSubmit={this.handleSubmit}>
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
                render={props => <Friend {...props} friend={this.friend} />}
        />
            </div>
        )
    }
}

export default connect(
    null,
    { addFriend}
)(FriendForm);