import React from 'react'

class FriendForm extends React.Component {
    render() {
        return(
            <div className='friendform'>
                <form>
                    <input
                    placeholder='Add A Friend'
                    type='text' />
                    <button><i className="fas fa-user-plus"></i></button>
                </form>
            </div>
        )
    }
}

export default FriendForm; 