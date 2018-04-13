import React from 'react'

import InstructorBio from './InstructorBio'

import GregPicture1 from '../images/senseiKendall.jpg'

class GregKendall extends InstructorBio {
    render() {
        return (
            <div className="instructorBio">
                <div id="buttonDiv">
                    <button onClick={(e) => this.onBackClick(e)}>Home</button>
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
                            Greg Kendall, Sensei
                        </div>
                        <div>
                            <p>
                                Let's dream so big in our lives that God has to be involved to realize them.  
                                We are tied to the past.  It makes us an important link to the future.  That future 
                                is worth fighting for.  Dream for a big future.  
                                Don't limit what God can accomplish through you.
                            </p>
                        </div>
                        <ul>
                            <li>Head Instructor of Warriors for Christ, Atlanta</li>
                            <li>President of Warriors for Christ, Inc - a 501(c)(3) minstry</li>
                            <li>Sandan (3rd degree) in the art of Tao Hsieh Wu Shu</li>
                            <li>Shodan (1st degree) in the Niho Kai style of Iaido</li>
                            <li>Tao Hsieh Wu Shu Christian Character Award Recipient</li>
                            <li>IFCMA Certified Senior Instructor (SIC course)</li>
                            <li>Close Quarter Combat Certificate (Level 1)</li>
                            <li>Warriors for Christ Board of Directors</li>
                            <li>IFCMA Board of Directors - Missions 2012-2013 (2-year term)</li>
                            <li>Deacon; Warriors for Christ Ministry</li>
                            <li>5th Gup Jeok Tong Je (Hostile Control) Hapkido</li>
                            <li>Certified A.P.E. Defense instructor</li>
                            <li>Grand Champion IFCMA National Tournament</li>
                        </ul>
                    </div>
                </div>

                <div id="buttonDiv">
                    <button onClick={(e) => this.onBackClick(e)}>Home</button>
                </div>
            </div>
        )
    }
}

export default GregKendall;
