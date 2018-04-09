import React, { Component } from 'react'

import '../styles/Locations.css'

class Atlanta extends Component {
    render() {
        return (
            <div className="location">
                <h3>Atlanta</h3>
                <h4>Gwinnett Church of Christ</h4>
                <p>1736 Sever Rd<br/>Lawrenceville, GA 30043</p>
                <p>Thursdays at 6pm</p>
            </div>
        );
    }
}

export default Atlanta;
