import React from 'react';

import Friend from './Friend';

const FriendList = props => {
    return (
        <ul>
            {props.friend.map(friend => {
            return <Friend 
                friend={friend} 
                key={friend.id} /> 
        })}
    </ul>
    )
}

export default FriendList;
