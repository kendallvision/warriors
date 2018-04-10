import React, { Component } from 'react'

import logo from '../images/thwslogo.jpg'

import '../App.css';

class ThwsLogo extends Component {

    appLogoClick(event) {
        //ReactDOM.render(<THWSPage />, document.getElementById('root'));
    }

    render() {
        return (
            <div className="appLogo" onClick={(e) => this.appLogoClick()}>
                <img src={logo} alt="logo" /> 
            </div>
        );
    }
}

export default ThwsLogo;
