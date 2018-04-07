import React, { Component } from 'react'

import '../styles/BasicHours.css'

class BasicHours extends Component {
    render() {
        return (
            <div id="basicHours">
                <h3>Warriors for Christ offers classes at the following locations:</h3>
                <ul>
                    <li><b>Gwinnett Church of Christ</b> (Atlanta) on Thursdays</li>
                    <li><b>Brooks Avenue Church of Christ</b> (Raleigh) on Tuesdays</li>
                </ul>
            </div>
        );
    }
}

export default BasicHours;
