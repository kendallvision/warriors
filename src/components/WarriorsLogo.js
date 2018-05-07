import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import logo from '../images/logoWarriors.jpg'

import '../App.css';

export default class WarriorsLogo extends Component {
    render() {
        return (
            <div className="mainLogo">
                <div className="appLogo">
                    <div className="appLogo-semantic">
                        <img src={logo} alt="logo" /> 
                    </div>
                </div>
                <div className="mailingListLink">
                    <Link to ="/mailingList">Join Our Email List</Link>
                </div>
            </div>
        );
    }
};
