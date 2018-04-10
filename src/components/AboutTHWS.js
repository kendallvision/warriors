import React, { Component } from 'react'

import '../App.css'
import '../styles/AboutTHWS.css'

class AboutTHWS extends Component {

    onLearnMoreClick(event) {

    }

    render() {
        return (
            <div className="infoSection aboutTHWS">
                <h2>What do we teach?</h2>
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
                {/*
                <a onClick={(e) => this.onLearnMoreClick()}>Learn More</a>
                */}
            </div>
        )
    }
}

export default AboutTHWS;
