import React, { Component } from 'react';
import '../styles/css/Register.css';

export default class DisplayErrors extends Component {
    displayErrors =  () => {
        for (let i in this.props.errors) {
            return (
            <span>{this.props.errors[i]}</span>
            )
        }
    }
    render() {
        return (
            <div>
                {this.displayErrors()}
            </div>
        )
    }
}
