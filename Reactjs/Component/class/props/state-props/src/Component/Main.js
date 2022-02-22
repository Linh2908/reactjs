import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.headerProps}</h1>
                <h2> {this.props.contentProps}</h2>
            </div>
        );
    }
}

export default Main;
