import React from 'react'
import {Link} from 'react-router-dom'

import ScrollTopComponent from '../components/ScrollTopComponent'

import GregPicture1 from '../images/senseiKendall.jpg'

import '../styles/Instructor.css'

export default class GregKendall extends ScrollTopComponent {
    render() {
        return (
            <div className="instructorBio">
                <div id="buttonDiv">
                    <Link to="/">Home</Link>
                </div>
                
                <div className="w3-row-padding">
                    <div className="w3-quarter">
                        <div className="appLogo">
                            <div className="appLogo-semantic">
                                <div id="primaryPicture">
                                    <img src={GregPicture1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3-threequarter">
                        <div id="instructorName">
                            Shihon Greg Kendall, Master
                        </div>
                        <div>
                            <p>
                                Let's dream so big in our lives that God has to be involved to realize them.  
                                We are tied to the past.  It makes us an important link to the future.  Dream for a big future.  
                                Don't limit what God can accomplish through you.
                            </p>
                        </div>
                        <ul>
                            <li>Head Instructor of Warriors for Christ, Atlanta</li>
                            <li>President of Warriors for Christ, Inc - a 501(c)(3) minstry (2012-present)</li>
                            <li>Shihon (master) (4th degree) in the art of Tao Hsieh Wu Shu</li>
                            <li>Shodan (1st degree) in the Niho Kai style of Iaido</li>
                            <li>Tao Hsieh Wu Shu Christian Character Award Recipient</li>
                            <li>IFCMA Certified Senior Instructor (SIC course)</li>
                            <li>Close Quarter Combat Certificate (Level 1)</li>
                            <li>Warriors for Christ Board of Directors</li>
                            <li>IFCMA Board of Directors - Vice President 2018-2020 (2 year term)</li>
                            <li>IFCMA Board of Directors - Missions 2012-2013 (2-year term)</li>
                            <li>Deacon; Warriors for Christ Ministry 2014-2017</li>
                            <li>5th Gup Jeok Tong Je (Hostile Control) Hapkido</li>
                            <li>Hapkido Brown Belt - Master Academy</li>
                            <li>Certified A.P.E. Defense instructor</li>
                            <li>Grand Champion IFCMA National Tournament 2013</li>
                        </ul>
                    </div>
                </div>

                <div id="buttonDiv">
                    <Link to="/">Home</Link>
                </div>
            </div>
        )
    }
};
