import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import UnderConstruction from './UnderConstruction';

import JoelGeniesse from '../components/JoelGeniesse'

import '../styles/Instructors.css'

class Instructors extends Component {

    onClick(event, instructor) {
        window.scroll(0, 0);
        ReactDOM.render(instructor, document.getElementById('contentRoot'));
    }

    render() {
        return (
            <div className="infoSection instructors">
                <h2>Instructors</h2>
                <h3>Raleigh</h3>
                <ul>
                    <li>
                        <a href="#" onClick={(e) => this.onClick(e, <JoelGeniesse/>)}>Joel Geniesse, soke</a>
                    </li>
                    <li>Katie Geniese</li>
                </ul>
                <h3>Atlanta</h3>
                <ul>
                    <li>Greg Kendall</li>
                    <li>Joseph Jones</li>
                </ul>
            </div>
        )
    }
}

export default Instructors;
