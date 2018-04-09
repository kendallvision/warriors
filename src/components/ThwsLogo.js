import React, { Component } from 'react'

import logo from '../images/thwslogo.jpg'
import '../App.css';

class ThwsLogo extends Component {
    render() {
        return (
            <div className="appLogo">
                <img src={logo} alt="logo" /> 
            </div>
        );
    }
}

export default ThwsLogo;
