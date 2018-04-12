import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import MainPage from './MainPage'

import '../styles/Instructor.css'

class InstructorBio extends Component {
    onBackClick(event) {
        ReactDOM.render(<MainPage />, document.getElementById('contentRoot'));
    }
}

export default InstructorBio;
