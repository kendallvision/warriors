import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import logo from '../images/logoWarriorsSmall.jpg'

import '../styles/AppHeader.css';

export default class AppHeader extends Component {
    render() {
        return (
            <div id="App-Header-Main" className="w3-container">
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
};
