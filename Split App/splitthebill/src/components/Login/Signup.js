import React from 'react';

class Signup extends React.Component {
    render() {
        return(
            <form>
                <input
                placeholder='Name'
                type='text' />
                <input
                placeholder='Username'
                type='text' />
                <input
                placeholder='Password'
                type='password' />
                <input
                placeholder='Confirm Password'
                type='password' />
                <button>Sign Up!</button>
            </form>
        )
    }
}

export default Signup