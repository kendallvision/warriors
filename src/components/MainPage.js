import React from 'react'

import Atlanta from '../components/Atlanta'
import APEDefense from '../components/APEDefense'
import Raleigh from '../components/Raleigh'
import RelatedLinks from '../components/RelatedLinks'
import Sanctioned from '../components/Sanctioned'
import ScrollTopComponent from '../components/ScrollTopComponent'
import WarriorsLogo from '../components/WarriorsLogo'
import WhatWeTeach from '../components/WhatWeTeach'

import '../styles/w3.css'

export default class MainPage extends ScrollTopComponent {
    render() {
        return (
            <div id="mainPage">
                <div className="w3-row-padding">
                    <div className="w3-third">
                        <WarriorsLogo />
                    </div>
                    <div className="w3-third">
                        <Raleigh />
                    </div>
                    <div className="w3-third">
                        <Atlanta />
                    </div>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-third">
                        <WhatWeTeach />
                    </div>
                    <div className="w3-third">
                        <APEDefense />
                    </div>
                    <div className="w3-third">
                        <RelatedLinks />
                    </div>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-whole">
                        <Sanctioned />
                    </div>
                </div>
            </div>
        );
    }
};
