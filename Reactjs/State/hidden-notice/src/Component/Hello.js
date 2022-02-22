import React, { Component } from 'react';

class Hello extends Component {

    componentWillUnmount() {
        alert("The component is going to be unmounted");
    }


    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

export default Hello;
