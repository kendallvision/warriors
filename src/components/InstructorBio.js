import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import MainPage from './MainPage'

import '../styles/Instructor.css'

class InstructorBio extends Component {
    onBackClick(event) {
        window.scroll(0, 0);
        ReactDOM.render(<MainPage />, document.getElementById('contentRoot'));
    }
}

export default InstructorBio;
