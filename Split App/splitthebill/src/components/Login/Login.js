import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <form>
                <input
                placeholder='Username'
                type='text' />
                <input
                placeholder='Password'
                type='password' />
                <button>Log In!</button>
            </form>
        )
    }
}

export default Login