import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <h2>{this.props.content}</h2>
            </div>
        );
    }
}

export default Main;
