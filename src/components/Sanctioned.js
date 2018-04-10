import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import icma from '../images/logo_ICMA.jpg'
import ifcma from '../images/logo_IFCMA.jpg'

import '../App.css'
import '../styles/Sanctioned.css'

class Sanctioned extends Component {
    render() {
        return (
            <div className="infoSection sanctioned">
                <h2>Tao Hsieh Wu Shu is sactioned by</h2>
                <div className="sanctionedImages">
                    <div>
                        <img id="icma" src={icma} alt="ICMA"/>
                        <a target="blank" href="http://ifcma.org/"><img id="ifcma" src={ifcma} alt="IFCMA"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sanctioned;
