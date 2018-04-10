import React, { Component } from 'react'

import '../styles/Locations.css'

class Atlanta extends Component {
    render() {
        return (
            <div className="location">
                <h3>Atlanta Location</h3>
                <h4>Gwinnett Church of Christ</h4>
                <p>1736 Sever Rd<br/>Lawrenceville, GA 30043</p>
                <h4>Classes held Thursdays at 6pm</h4>
                <p>Dues
                    <ul>
                        <li>Registration $50 (includes 1st month &amp; uniform)</li>
                        <li>Monthly dues $25 for first student</li>
                        <li>$5 for each additional family member</li>
                        <li>Currently accepting new students</li>
                    </ul>
                </p>
                <p>
                    <a href="mailto:info.atlanta@warriors-for-christ.com">Email Atlanta Dojo</a>
                </p>
            </div>
        );
    }
}

export default Atlanta;
