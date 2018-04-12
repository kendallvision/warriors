import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import UnderConstruction from './UnderConstruction';

import '../styles/APEDefense.css'

class APEDefense extends Component {

    render() {
        return (
            <div className="infoSection apeDefense">
                <h2>A.P.E. Defense</h2>
                <UnderConstruction/>
            </div>
        )
    }
}

export default APEDefense;
