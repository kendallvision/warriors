import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BasicHours from './components/BasicHours'
import UnderConstruction from './components/UnderConstruction'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*
          <img src={logo} className="App-logo" alt="logo" />
          */}
          <h1 className="App-title">Warriors for Christ</h1>
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
