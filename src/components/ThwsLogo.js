import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import AboutTHWS from './AboutTHWS'

import logo from '../images/thwslogo.jpg'

import '../App.css';

class ThwsLogo extends Component {

    appLogoClick(event) {
        window.scroll(0, 0);
        ReactDOM.render(<AboutTHWS />, document.getElementById('contentRoot'));
    }

    render() {
        return (
            <div className="appLogo" onClick={(e) => this.appLogoClick()}>
                <div className="appLogo-semantic">
                    <img src={logo} alt="logo" /> 
                </div>
            </div>
        );
    }
}

export default ThwsLogo;
