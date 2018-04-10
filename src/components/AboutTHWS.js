import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import MainPage from './MainPage'

import title from '../images/titleTaoHsiehWuShu.jpg'
import kanji from '../images/kanji.jpg'

import '../styles/AboutTHWS.css'

class AboutTHWS extends Component {

    onBackClick(event) {
        ReactDOM.render(<MainPage />, document.getElementById('contentRoot'));
    }

    render() {
        return (
            <div className="w3-row-padding">
                <div id="buttonDiv">
                    <button onClick={(e) => this.onBackClick(e)}>Home</button>
                </div>
                <div id="descriptionDiv">
                    <div className="appLogo">
                        <div className="appLogo-semantic">
                            <img src={title} alt="Tao Hsieh Wu Shu"/>
                        </div>
                    </div>
                    <p>
                        Learn martial arts in a family environment with fellow students who wish to grow and develop to the best of their ability, no matter their age or background.  Students are allowed to begin classes at four (4) years old, and are encouraged to join as a family.
                    </p>
                    <p>
                        The Martial arts are a life sport in which the family can learn and grow together.                 
                    </p>
                    <p>
                        Tao Hsieh Wu Shu is pronounced; taw heshy woo shoo
                    </p>
                    <p>
                        Tao Hsieh Wu Shu literally means the way of unified martial arts. 
                    </p>
                    <p>
                        Created by Sifu Joel Geniesse under the guidance of Jerry Wiles, Boo Kwon Chang Nim, of the International Christian Martial Arts Association (ICMA), and tempered in the pre-UFC world of open full contact tournaments, Tao Hsieh Wu Shu is quickly becoming a world recognized martial art system. 
                    </p>
                    <div className="appLogo">
                        <div className="appLogo-semantic">
                            <img src={kanji} alt="Tao Hsieh Wu Shu"/>
                        </div>
                    </div>

                    <p className="quote">
                        <i>Do you not know that in a race all the runners run, but only one gets the prize? 
                        Run in such a way as to get the prize. Everyone who competes in the games goes into strict training. 
                        They do it to get a crown that will not last; but we do it to get a crown that will last forever. 
                        Therefore, I do not run like a man running aimlessly; I do not fight like a man beating the air. 
                        No, I beat my body and make it my slave so that after I have preached to others, 
                        I myself will not be disqualified for the prize.</i> - 1 Corinthians 9:24-27                    
                    </p>

                    <p>
                        The development of Tao Hsieh Wu Shu began in 2000 when Sifu Geniesse was approached by Master Phillip Cann to create a Christian focused martial art system. Tao Hsieh Wu Shu was officially sanctioned by the ICMA on June 9, 2007 at their international Championships. In addition to the tournament, students of Tao Hsieh Wu Shu performed a demonstration introducing their style to the international martial arts community. On August 18, 2007, at the International Fellowship of Christian Martial Arts' (IFCMA) annual black belt seminar, the Shihon Counsel bestowed upon Sifu Geniesse, Soke (founder or head of house) recognition. Max Andrews, Kyoshi, of the IFCMA, played a critical role in preparing Sifu Geniesse for his master's test and presentation of Tao Hsieh Wu Shu to the Shihon Counsel of the ICMA. Andrews Kyoshi, who himself is Soke of Niho Kempo Jujitsu Ryu and 2007 inductee into the United States Martial Arts Hall of Fame, is still mentor and advisor to Soke Geniesse. 
                    </p>
                    <p>
                        Tao Hsieh Wu Shu is based on the premise that there is no one perfect martial art form. The focus is for each person to create a style based upon a wide range of the techniques and that individual's ability. The student will use the most effective techniques from various martial arts forms, which are best suited for their goals and abilities. It is an open-ended form of martial arts that does not set limitations on an individual. Focus is placed on unifying techniques found from many different martial arts styles, taking various movements from the styles and regions and then allowing each individual to grow and become competent in their own individualized style within the martial arts.
                    </p>
                    <p>
                        Students often consider their training linked to a specific animal style. This encourages a smooth contrast between the mixture of martial art forms and the student as an individual. Even-though students learn the same range of techniques each student has a specific focus. Where the focus of one student may be powerful kicks; the next student may focus on grappling. 
                    </p>
                    <p>
                        Tao Hsieh Wu Shu is one of the few styles of martial arts that is a Christian based discipline. This allows the Spirit to develop within you as your physical body develops on the outside.  The student does not have to be a Christian to study Christian martial arts, just as many students are not Buddhist, yet study Buddhist based martial arts.  The philosophy of Tao Hsieh Wu Shu is that the student becomes so good that if ever attacked he or she would do minimal damage to both themselves and their attacker.  This is accomplished by teaching students to be able to defend against the greatest martial artists, with minimal effort.  What most students find is the ability to avoid confrontation through confidence.  Jesus himself fashioned a whip, and drove all out of the temple.  He is the same Jesus who said that it would be better for one to have a large mill stone tied around his neck, and cast into the abyss then to harm one of his children.  Jesus never had to throw a punch; never the less, those around him knew his confidence clearly.                         
                    </p>

                    <div>
                        Tao Hsieh Wu Shu is based on eight different widely recognized martial art styles:
                        <ul>
                            <li>Tae Kwon Do</li>
                            <li>Wing Chun</li>
                            <li>Shoalin Wu Shu</li>
                            <li>Jujitsu / Judo</li>
                            <li>Muay Thai</li>
                            <li>Capoeira</li>
                            <li>Nin-Po</li>
                            <li>Pressure Points</li>
                        </ul>
                    </div>

                    <div>
                        Our martial arts students are ranked in the following classifications 
                    </div>

                    <div className="belt">
                        <div className="colorBlock colorWhite"></div>
                        <div className="beltText">
                            <strong>White</strong>- Student is new, and lacking in knowledge.
                        </div>
                    </div>

                    <div className="belt">
                        <div className="colorBlock colorYellow"></div>
                        <div className="beltText">
                            <strong>Yellow </strong>- Students knowledge is rising like the sun. He/she has great potential, but is still very new.
                        </div>
                    </div>

                    <div className="belt">
                        <div className="colorBlock colorOrange"></div>
                        <div className="beltText">
                            <strong>Orange</strong><strong>- </strong>Like molten iron, the student is ready to be formed.
                        </div>
                    </div>

                    <div className="belt">
                        <div className="colorBlock colorGreen"></div>
                        <div className="beltText">
                            <strong>Green</strong>- Students knowledge is gaining stability like the roots of a plant.
                        </div>
                    </div>

                    <div className="belt">
                        <div className="colorBlock colorBlue"></div>
                        <div className="beltText">
                            <strong>Blue</strong>- Students knowledge is expanding, and becoming unclouded like the clear sky.
                        </div>
                    </div>

                    <div className="belt">
                        <div className="colorBlock colorRed"></div>
                        <div className="beltText">
                            <strong>Red </strong>- Students knowledge is very advanced, but quite dangerous. Student must learn to control his/her abilities and strengths, and focus them in a positive manner.
                        </div>
                    </div>

                    <div className="belt">
                        <div className="colorBlock colorBlack"></div>
                        <div className="beltText">
                            <strong>Black </strong>- The knowledge of all the previous color rankings are combining to become unified. The student has great abilities that stem much further than physical techniques.
                        </div>
                    </div>

                    <p>
                        Tao Hsieh Wu Shu is sanctioned by the International Christian Martial Arts Association (ICMA), and by the International Fellowship of Christian Martial Arts (IFCMA).
                    </p>
                </div>
                <div id="buttonDiv">
                    <button onClick={(e) => this.onBackClick(e)}>Home</button>
                </div>
            </div>
        );
    }
}

export default AboutTHWS;
