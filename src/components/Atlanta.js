import React, { Component } from 'react'

import '../styles/Locations.css'

class Atlanta extends Component {
    render() {
        return (
            <div className="location">
                <h3>Atlanta</h3>
                <h4>Gwinnett Church of Christ</h4>
                <p>1736 Sever Rd<br/>Lawrenceville, GA 30043</p>
                <p>Classes held Thursdays at 6pm</p>
                <p>Dues
                    <ul>
                        <li>Registration $50 (includes 1st month &amp; uniform)</li>
                        <li>Monthly dues $25 for first student</li>
                        <li>$5 for each additional family member.</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default Atlanta;
