import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from "react-router-dom";
  
import AppHeader from './components/AppHeader'
import MainPage from './components/MainPage'

import './App.css';
import GregKendall from './components/GregKendall';
import JoelGeniesse from './components/JoelGeniesse';
import AboutTHWS from './components/AboutTHWS';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div>
            <AppHeader />
            <div id="contentRoot">
              <Route exact path="/" component={MainPage}/>
              <Route path="/kendallg" component={GregKendall}/>
              <Route path="/geniessej" component={JoelGeniesse}/>
              <Route path="/about" component={AboutTHWS}/>
            </div>        
          </div>
      </HashRouter>
    );
  }
}

export default App;
