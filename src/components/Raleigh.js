import React, { Component } from 'react'

import '../styles/Locations.css'

class Raleigh extends Component {
    render() {
        return (
            <div className="location">
                <h3>Raleigh</h3>
                <h4>Brooks Ave Church of Christ</h4>
                <p>700 Brooks Ave<br />Raleigh, NC 27607</p>
                <p>Classes held Tuesdays at 6pm</p>
                <p>Dues
                    <ul>
                        <li>Registration $50 (includes 1st month &amp; uniform)</li>
                        <li>Monthly dues $30 for first student</li>
                        <li>$10 for each additional family member.</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default Raleigh;
