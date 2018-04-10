import React, { Component } from 'react'

import '../styles/Locations.css'

class Raleigh extends Component {
    render() {
        return (
            <div className="location">
                <h3>Raleigh Location</h3>
                <div className="headInstructor"><b>Head Instructor:</b> Joel Geniesse, soke</div>
                <div className="locationAddress">
                    <a href="https://www.google.com/maps/place/Brooks+Avenue+Church+of+Christ/@35.7971213,-78.6721486,15z/data=!4m2!3m1!1s0x0:0xd89c8965f9fe4610?sa=X&ved=0ahUKEwjVoJ7wzq_aAhXDy4MKHW5KAdkQ_BIIgAEwDQ" target="blank">
                        <h4>Brooks Ave Church of Christ</h4>
                        <h5>700 Brooks Ave<br />Raleigh, NC 27607</h5>
                    </a>
                </div>
                <h4>Classes held Tuesdays at 6pm</h4>
                <div className="locationDues">
                    <b>Dues</b>
                    <ul>
                        <li>Email us to be added to our new student waiting list.</li>
                        <li>Registration $50 (includes 1st month &amp; uniform)</li>
                        <li>Monthly dues $30 for first student</li>
                        <li>$10 for each additional family member</li>
                    </ul>
                </div>
                <p>
                    <a href="mailto:info.raleigh@warriors-for-christ.com">Email Raleigh Dojo</a>
                </p>
            </div>
        );
    }
}

export default Raleigh;
