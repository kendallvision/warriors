import React, { Component } from 'react'

export default class ExternalLink extends Component {
    render() {
        return (
            <a target="none" href={this.props.href}>{this.props.desc}</a>
        )
    }
};
