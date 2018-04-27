import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../App.css'
import '../styles/WhatWeTeach.css'

export default class WhatWeTeach extends Component {
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
                    <li>Love for God</li>
                    <li>Loving Neighbors as Ourselves</li>
                    <li>Honor &amp; Discipline</li>
                    <li>Heart of a Servant</li>
                    <li>Mutual Respect</li>
                    <li>Physical Fitness</li>
                    <li>Self Defense</li>
                </ul>
                <p>
                    Our martial arts style is <b>Tao Hsieh Wu Shu</b>
                </p>
                <Link to ="/about">Learn More</Link>
            </div>
        )
    }
};
