import { Component } from 'react'

export default class ScrollTopComponent extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
};
