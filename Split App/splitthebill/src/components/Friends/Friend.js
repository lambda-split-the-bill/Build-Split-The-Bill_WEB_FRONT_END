import React from 'react';

const Friend = props => {
        return(
            <div className='friend'>
                <h2>{props.friend.name}</h2>
            </div>
    )
}

export default Friend;