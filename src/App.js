import React, { Component } from 'react';
import './App.css';
import './styles/w3.css'

import AppHeader from './components/AppHeader'
import Atlanta from './components/Atlanta'
import Raleigh from './components/Raleigh'
import ThwsLogo from './components/ThwsLogo'
import UnderConstruction from './components/UnderConstruction'

class App extends Component {
  render() {
    return (
      <div>
        <div class="w3-container w3-black">
          <AppHeader />
        </div>

        <div class="w3-row-padding">
          <div class="w3-third">
            <ThwsLogo />
          </div>
          <div class="w3-third">
            <Atlanta />
          </div>
          <div class="w3-third">
            <Raleigh />
          </div>
        </div>

        <div class="w3-row-padding">
          <UnderConstruction />
        </div>        
      </div>
    );
  }
}

export default App;
