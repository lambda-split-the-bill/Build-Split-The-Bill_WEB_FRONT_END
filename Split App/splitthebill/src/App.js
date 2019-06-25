import React from 'react';

import Login from './components/Login/Login';
import SplitApp from './SplitApp';
import withAuthenicator from "./authentication/Authentication";

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

const ComponentFromWithAuthenticate = withAuthenicator(SplitApp);

export default App;
