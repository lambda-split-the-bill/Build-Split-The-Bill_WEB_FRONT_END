import React from 'react';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Signup from './components/Login/Signup';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
        <Route exact path='/'
        render={props => <Logout {...props} />}
        />

        <Route exact path='/'
        render={props => <Home {...props} />}
        />      

        <Route exact path='/'
        render={props => <Friends {...props} />}
        />

        <Route exact path='/login'
        render={props => <Login {...props} />}
        />

        <Route exact path='/signup'
        render={props => <Signup {...props} />}
        />
    </div>
);
}

export default App;
