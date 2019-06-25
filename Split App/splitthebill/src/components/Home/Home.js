import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    render() {
    return (
        <div className='Home'>
            <h1>Welcome to Split the Bill</h1>
            <button><NavLink to='/split'>Add A Bill</NavLink></button>
            <h2>Recent Activity</h2>
            <p>You went out to McDonalds with Mike, James and Brian and spent $24.50!</p>
        </div>
)}}

export default Home;