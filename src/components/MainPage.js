import React, { Component } from 'react'

import Atlanta from '../components/Atlanta'
import Raleigh from '../components/Raleigh'
import ThwsLogo from '../components/ThwsLogo'
import UnderConstruction from '../components/UnderConstruction'
import WhatWeTeach from '../components/WhatWeTeach'

import '../styles/w3.css'

class MainPage extends Component {
    render() {
        return (
            <div id="mainPage">
                <div className="w3-row-padding">
                    <div className="w3-third">
                    <ThwsLogo />
                    </div>
                    <div className="w3-third">
                    <Raleigh />
                    </div>
                    <div className="w3-third">
                    <Atlanta />
                    </div>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-whole">
                    <WhatWeTeach />
                    </div>
                </div>

                <div className="w3-row-padding">
                    <UnderConstruction />
                </div>        
            </div>
        );
    }
}

export default MainPage;
