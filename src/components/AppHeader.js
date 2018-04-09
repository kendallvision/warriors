import React, { Component } from 'react'

import '../styles/AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <div className="appHeader">
                <div>
                    <h1 className="appHeader-title">Warriors for Christ</h1>
                    <p>Christian Ministries through Martial Arts</p>
                </div>
            </div>
        );
    }
}

export default AppHeader;
