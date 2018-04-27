import React, { Component } from 'react';
import { Route, HashRouter, Redirect } from "react-router-dom";
  
import AboutTHWS from './components/AboutTHWS';
import AppHeader from './components/AppHeader'
import GregKendall from './components/GregKendall';
import JoelGeniesse from './components/JoelGeniesse';
import MainPage from './components/MainPage'

import './App.css';

export default class App extends Component {

  componentDidMount() {
    console.log('Location: ' + window.location);
  }

  render() {

    var redirect = '';

    if ( window.location.hostname === 'taohsiehwushu.com' 
      && (window.location.href.includes('about') === false ) ) {
        redirect = (<Redirect to='/about'/>);
    }

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
            {redirect}
          </div>
      </HashRouter>
    );
  }
}
