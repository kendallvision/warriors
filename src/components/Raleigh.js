import React, { Component } from 'react'

import '../styles/Locations.css'

class Raleigh extends Component {
    render() {
        return (
            <div className="location">
                <h3>Raleigh Location</h3>
                <h4>Brooks Ave Church of Christ</h4>
                <p>700 Brooks Ave<br />Raleigh, NC 27607</p>
                <h4>Classes held Tuesdays at 6pm</h4>
                <p>Dues
                    <ul>
                        <li>Registration $50 (includes 1st month &amp; uniform)</li>
                        <li>Monthly dues $30 for first student</li>
                        <li>$10 for each additional family member</li>
                        <li>Email us to be added to our new student waiting list.</li>
                    </ul>
                </p>
                <p>
                    <a href="mailto:info.raleigh@warriors-for-christ.com">Email Raleigh Dojo</a>
                </p>
            </div>
        );
    }
}

export default Raleigh;
