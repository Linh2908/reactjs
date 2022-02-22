import React, { Component } from 'react';

class Football extends Component {
    
    shot(a) {
        alert(a)
    }
    render() {
        return (
            <div>
                <button onClick={() => (this.shot("Football"))}>Take a shot</button>
            </div>
        );
    }
}

export default Football;
