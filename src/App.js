import React, { Component } from 'react';
import logo from './images/thwslogo.jpg';
import './App.css';

import AppHeader from './components/AppHeader'
import BasicHours from './components/BasicHours'
import UnderConstruction from './components/UnderConstruction'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
        <p className="App-intro">
          <BasicHours />
          <UnderConstruction />
        </p>
      </div>
    );
  }
}

export default App;
