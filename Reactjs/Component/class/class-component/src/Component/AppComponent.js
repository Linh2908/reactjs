import React, { Component } from 'react';

class Appcomponent extends Component {
    render() {
        return (
            <div>
                <h1 > Total : {this.props.firstNumber+ this.props.secondNumber}</h1>
            </div>
        );
    }
}

export default Appcomponent;
