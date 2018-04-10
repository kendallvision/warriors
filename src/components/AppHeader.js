import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import MainPage from '../components/MainPage'

import logo from '../images/logoWarriorsSmall.jpg'

import '../styles/AppHeader.css';

class AppHeader extends Component {

    onHomeClick(event) {
        window.scroll(0, 0);
        ReactDOM.render(<MainPage />, document.getElementById('contentRoot'));
    }

    render() {
        return (
            <div className="w3-container w3-black">
                <div className="appHeader">
                    <div id="homeLogo" onClick={(e) => this.onHomeClick(e)}>
                        <img src={logo}/>
                    </div>
                    <div>
                        <h1 className="appHeader-title">Warriors for Christ</h1>
                        <p>Christian Ministries through Martial Arts</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader;
