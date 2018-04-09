import React, { Component } from 'react'

import '../styles/Locations.css'

class Raleigh extends Component {
    render() {
        return (
            <div className="location">
                <h3>Raleigh</h3>
                <h4>Brooks Avenue Church of Christ</h4>
                <p>700 Brooks Ave<br />Raleigh, NC 27607</p>
                <p>Tuesdays at 6pm</p>
            </div>
        );
    }
}

export default Raleigh;
