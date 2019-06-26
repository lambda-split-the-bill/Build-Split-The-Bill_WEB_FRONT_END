import React from 'react';
import FriendForm from './FriendForm';
import Friend from './Friend';

class Friends extends React.Component {
    render() {
        return(
            <div className='friends'>
            <FriendForm />
            <Friend />
            </div>
        )
    }
}

export default Friends;