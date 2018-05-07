import React, {Component} from 'react'

import ExternalLink from './ExternalLink'

import '../App.css'
import '../styles/RelatedLinks.css'

export default class RelatedLinks extends Component {
    render() {
        return (
            <div className="infoSection relatedLinks">
                <h2>Related Links</h2>
                <h3>Check out these other great organizations:</h3>
                <div id="links">
                    <ul>
                        <li><ExternalLink href="http://www.brooks.org/" desc="Brooks Ave Church of Christ" /></li>
                        <li><ExternalLink href="http://gwinnettcc.org/" desc="Gwinnett Church of Christ" /></li>
                        <li><ExternalLink href="http://www.ifcma.org" desc="Internation Fellowship of Christian Martial Artists" /></li>
                        <li><ExternalLink href="http://smithdouglas.com/" desc="Smith Douglas Homes" /></li>
                        <li><ExternalLink href="http://www.ezprints.com" desc="EZ Prints" /></li>
                        <li><ExternalLink href="https://www.bigpeachrunningco.com/" desc="Big Peach Running Stores" /></li>
                        <li><ExternalLink href="http://www.atnipphotography.com/" desc="Atnip Photography" /></li>
                        <li><ExternalLink href="https://tysteeleband.com/" desc="Ty Steele Band" /></li>
                    </ul>
                </div>
            </div>
        )
    }
};
