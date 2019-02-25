import React, { Component } from 'react';
import './App.css';

// import AppContainer from './components/AppContainer.js';
import AppContainerNew from './components/AppContainerNew.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AppContainer /> */}
        <AppContainerNew />
      </div>
    );
  }
}

export default App;
