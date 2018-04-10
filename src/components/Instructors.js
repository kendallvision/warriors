import React, { Component } from 'react'
import UnderConstruction from './UnderConstruction';

import '../styles/Instructors.css'

class Instructors extends Component {
    render() {
        return (
            <div className="infoSection instructors">
                <h2>Instructors</h2>
                <UnderConstruction />
            </div>
        )
    }
}

export default Instructors;
