import { Component } from 'react'

class ScrollTopComponent extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
}

export default ScrollTopComponent;
