import React from 'react'
import {Link} from 'react-router-dom'

import InstructorBio from './InstructorBio'

import JoelPicture1 from '../images/sokeGeniesse.jpg'
import JoelPicture2 from '../images/imgFatherSon.jpg'
import JoelPicture3 from '../images/imgMastersDemo.jpg'

class JoelGeniesse extends InstructorBio {
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
                                    <img src={JoelPicture1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3-threequarter">
                        <div id="instructorName">
                            Shihon Joel Geniesse, Soke
                        </div>
                        <div id="instructorSubName">
                            Founder
                        </div>
                        <ul>
                            <li>Shihon (Master), Go Dan, 5th degree Black Belt in Tao Hsieh Wu Shu</li>
                            <li>San Dan, 3rd degree, Black Belt, in Niho Kempo Jujitsu Ryu under Kyoshi Max Andrews</li>
                            <li>Il Dan, 1st degree Black Belt in Tae Kwon Do through the World Tae Kwon Do Federation (WTF)</li>
                            <li>Level 4 (highest rank) in Nin-Po under Shidoshi Eddie Alaniz Sr.</li>
                            <li>Founder of Warriors for Christ, LLC a 501c3 (non-profit) and President from 2000 to 2012</li>
                            <li>Founder of Tao Hsieh Wu Shu— “The way of unified martial arts”</li>
                            <li>On August 18, 2007, granted the title of Soke, or “head of house” by the Shihon Council of the International Fellowship of Christian Martial Arts (IFCMA). This title, in its purest form, can only be given to the founder of a martial art system who has had their system recognized by two or more associations or Soke.</li>
                            <li>IFCMA Vice President, 2008 to 2010</li>
                            <li>IFCMA President from 2010 to 2013</li>
                            <li>IFCMA Certified Master Instructor</li>
                            <li>radKIDS Certified Instructor</li>
                            <li>Founder of APE Defense (Awareness Prevention Execution)</li>
                            <li>North Carolina State Champion 1984, 1985, 1986, 1987</li>
                            <li>NC State Grand Champion (Forms &amp; Sparing) 1986 &amp; 1987</li>
                            <li>Junior Olympic National Tae Kwon Do Champion 1987</li>
                            <li>Made the 1988 U.S.A. Olympic team for Seoul, South Korea</li>
                            <li>Champion at the 2005 ICMA International Tournament (Forms &amp; Sparring)</li>
                        </ul>
                    </div>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-half">
                        <div className="appLogo">
                            <div className="appLogo-semantic">
                                <img id="joelPicture2" src={JoelPicture2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="w3-half">
                        <div className="appLogo">
                            <div className="appLogo-semantic">
                                <img id="joelPicture3" src={JoelPicture3} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="buttonDiv">
                    <Link to="/">Home</Link>
                </div>
            </div>
        )
    }
}

export default JoelGeniesse;
