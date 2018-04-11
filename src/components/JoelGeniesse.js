import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import MainPage from './MainPage'

import JoelPicture1 from '../images/sokeGeniesse.jpg'
import JoelPicture2 from '../images/imgFatherSon.jpg'
import JoelPicture3 from '../images/imgMastersDemo.jpg'

class InstructorBio extends Component {
    onBackClick(event) {
        ReactDOM.render(<MainPage />, document.getElementById('contentRoot'));
    }
}

class JoelGeniesse extends InstructorBio {
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
                                    <img src={JoelPicture1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3-threequarter">
                        <div id="instructorName">
                            Shihon Joel Geniesse, soke
                        </div>
                        <div id="instructorSubName">
                            Founder
                        </div>
                        <ul>
                            <li>Founder of Tao Hsieh Wu Shu and Warriors for Christ</li>
                            <li>Started training in martial arts (Muay Thai and TKD) in January, 1980</li>
                            <li>Founder of Tao Hsieh Wu Shu, The Way of Unified Martial Arts, June 2007</li>
                            <li>Promoted to Master Instructor on June 9th, at the 2007 ICMA National Championships</li>
                            <li>Bestowed Soke Recognition by the Shihon Counsel of the IFCMA on August 18, 2007</li>
                            <li>San Dan, 3rd Degree Black Belt, in the art of Niho Kenpo Jujitsu Ryu under Kyoshi Max Andrews</li>
                            <li>1st Dan Black belt in Tae Kwon Do under Grand Master Pok Shik Yun of the World Tae Kwon Do Federation</li>
                            <li>Champion at the 2005 ICMA International Tournament (Forms &amp; Sparing)</li>
                            <li>North Carolina State Champion 1984, 1985, 1986, 1987</li>
                            <li>NC State Grand Champion (Forms &amp; Sparing) 1986 &amp; 1987.</li>
                            <li>Junior Olympic National Champion 1987</li>
                            <li>Qualified for the 1988 U.S.A. Olympic team for Seoul, Korea at Nationals</li>
                            <li>Won several open, full contact tournaments in the late 1980s thru early 1990s</li>
                            <li>Member of the International Christian Martial Arts Association (ICMA)</li>
                            <li>Member of the International Fellowship of Christian Martial Arts (IFCMA)</li>
                            <li>IFCMA Master Certified Instructor</li>
                            <li>VP of the IFCMA; 2010-2011 (2-year term)</li>
                            <li>President of the IFCMA; 2012-2013 (2-year term)</li>
                            <li>Deacon; Campus Student Ministry</li>
                            <li>Certified radKIDS instructor</li>
                        </ul>
                    </div>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-half">
                        <img src={JoelPicture2}/>
                    </div>
                    <div className="w3-half">
                        <img src={JoelPicture3}/>
                    </div>
                </div>

                <div id="buttonDiv">
                    <button onClick={(e) => this.onBackClick(e)}>Home</button>
                </div>
            </div>
        )
    }
}

export default JoelGeniesse;
