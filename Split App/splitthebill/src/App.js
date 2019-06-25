import React from 'react';

import Login from './components/Login/Login';
import SplitApp from './SplitApp';
import withAuthenicator from "./Authentication/Authentication";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
  );
  }
}

const ComponentFromWithAuthenticate = withAuthenicator(Login)(SplitApp);

export default App;
