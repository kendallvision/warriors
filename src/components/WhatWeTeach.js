import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import AboutTHWS from './AboutTHWS'

import '../App.css'
import '../styles/WhatWeTeach.css'

class WhatWeTeach extends Component {

    onLearnMoreClick(event) {
        ReactDOM.render(<AboutTHWS />, document.getElementById('contentRoot'));
    }

    render() {
        return (
            <div className="infoSection whatWeTeach">
                <h2>What We Teach</h2>
                <p>
                    Warriors for Christ shares the love of Christ through the Contagious Christianity concept of doing life and having fun together.
                </p>
                <div>
                    We teach:
                </div>
                <ul>
                    <li>Love for One Another</li>
                    <li>Discipline</li>
                    <li>Mutual Respect</li>
                    <li>Physical Fitness</li>
                    <li>Self Defense</li>
                </ul>
                <p>
                    Our martial arts style is <b>Tao Hsieh Wu Shu</b>
                </p>
                <a onClick={(e) => this.onLearnMoreClick(e)}>Learn More</a>
            </div>
        )
    }
}

export default WhatWeTeach;
