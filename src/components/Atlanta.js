import React, { Component } from 'react'

import '../styles/Locations.css'

class Atlanta extends Component {
    render() {
        return (
            <div className="location">
                <h3>Atlanta Location</h3>
                <div className="headInstructor"><b>Head Instructor:</b> Greg Kendall, sensei</div>
                    <div className="locationAddress">
                        <a href="https://www.google.com/maps/place/Gwinnett+Church+of+Christ/@33.9811122,-84.0559891,15z/data=!4m2!3m1!1s0x0:0x1868baf4c86a77b0?sa=X&ved=0ahUKEwj905HMza_aAhUp_4MKHfFJBLUQ_BIIkwEwCg" target="blank">
                            <h4>Gwinnett Church of Christ</h4>
                            <h5>1736 Sever Rd<br/>Lawrenceville, GA 30043</h5>
                        </a>
                    </div>
                <h4>Classes held Thursdays at 6pm</h4>
                <div className="locationDues">
                    <b>Dues</b>
                    <ul>
                        <li>Currently accepting new students</li>
                        <li>Registration $50 (includes 1st month &amp; uniform)</li>
                        <li>Monthly dues $25 for first student</li>
                        <li>$5 for each additional family member</li>
                    </ul>
                </div>
                <p>
                    <a href="mailto:info.atlanta@warriors-for-christ.com">Email Atlanta Dojo</a>
                </p>
            </div>
        );
    }
}

export default Atlanta;
