import React from 'react';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Logout from './components/Login/Logout';
import Split from './components/Calculator/Split';

function App() {
  return (
    <div className="App">
      <Home />
      <Friends />
      <Login />
      <Signup />
      <Logout />
      <Split />
    </div>
  );
}

export default App;
