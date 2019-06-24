import React from 'react'

class FriendForm extends React.Component {
    render() {
        return(
            <div className='friendform'>
                <form>
                    <input
                    placeholder='Add A Friend'
                    type='text' />
                    <i class="far fa-plus-square fa-2x"></i>
                </form>
            </div>
        )
    }
}

export default FriendForm; 