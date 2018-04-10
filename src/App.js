import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader'
import MainPage from './components/MainPage'

import './App.css';

class App extends Component {

  componentDidMount() {
    ReactDOM.render(<MainPage />, document.getElementById('contentRoot'));
  }

  render() {
    return (
      <div>
        <AppHeader />
        <div id="contentRoot"></div>        
      </div>
    );
  }
}

export default App;
