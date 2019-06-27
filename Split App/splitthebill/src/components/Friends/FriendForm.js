import React from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../../actions/friend';

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
            <div className='friendform'>
                <form onSubmit={this.handleSubmit}>
                    <input
                    placeholder='Add A Friend'
                    type='text'
                    name='name'
                    value={this.state.friend.name}
                    onChange={this.handleChange} />
                    
                    <input
                    placeholder='E-Mail'
                    type='text'
                    name='email'
                    value={this.state.friend.email} 
                    onChange={this.handleChange} />
                    <button type='submit'><i className="fas fa-user-plus"></i></button>
                </form>
            </div>
        )
    }
}


export default connect(
    null,
    { addFriend }
)(FriendForm);