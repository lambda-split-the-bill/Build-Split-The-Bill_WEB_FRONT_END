import React from 'react';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Signup from './components/Login/Signup';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <div className="App">
        <Route exact path='/login'
        render={props => <Login {...props} />}
        />

        <Route exact path='/signup'
        render={props => <Signup {...props} />}
        />

        <PrivateRoute exact path='/' component={Logout} />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/' component={Friends} />
    </div>
);
}

export default App;
