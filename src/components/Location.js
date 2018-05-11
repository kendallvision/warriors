import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../styles/Locations.css'
import '../App.css'

export default class Location extends Component {
    render() {
        const calendar = this.props.calendarLink === '' ? <div>&nbsp;</div> : <a target="none" href={this.props.calendarLink}>Events Calendar</a>;

        return (

            <div className="location infoSection">
                <h3>{this.props.locationTown} Location</h3>

                <div className="headInstructor"><b>Head Instructor:&nbsp;</b>
                    <Link to={this.props.instructor}>{this.props.headInstructor}</Link>
                </div>

                <div className="locationAddress">
                    <a href={this.props.mapLink} target="blank">
                        <h4>{this.props.locationName}</h4>
                        <h5>
                            {this.props.address1}<br/>
                            {this.props.cityStateZip}
                        </h5>
                    </a>
                </div>
                <h4>{this.props.classTimes}</h4>
                <div>
                    {calendar}
                </div>
                <div className="locationDues">
                    <b>Dues</b>
                    <ul>
                        <li>{this.props.registrationStatus}</li>
                        <li>{this.props.registrationPrice}</li>
                        <li>{this.props.registrationMonthly}</li>
                        <li>{this.props.registrationOtherFamily}</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <a href={this.props.infoEmail}>Email {this.props.locationTown} Dojo</a>
                    </div>
                </div>
            </div>
        )
    }
};
