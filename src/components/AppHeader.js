import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import logo from '../images/logoWarriorsSmall.jpg'

import '../styles/AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <div className="w3-container w3-black">
                <div className="appHeader">
                    <div id="homeLogo">
                        <Link to ="/"><img src={logo} alt=""/></Link>
                    </div>
                    <div>
                        <h1 className="appHeader-title">Warriors for Christ</h1>
                        <p>Christian Ministries through Martial Arts</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader;
