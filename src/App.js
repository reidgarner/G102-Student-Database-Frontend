import React, { Component } from 'react';
import './style.scss';
import Toolbar from './components/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Toolbar />
        </header>
      </div>
    );
  }
}

export default App;
