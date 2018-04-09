import React, { Component } from 'react';

import AppHeader from '../components/AppHeader'
import UnderConstruction from '../components/UnderConstruction'

import '../App.css';

class THWSPage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <AppHeader />
                </header>
                <p className="App-intro">
                    <UnderConstruction />
                </p>
            </div>
        );
    }
}

export default THWSPage;
