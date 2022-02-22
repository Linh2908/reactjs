import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div style={{textAlign :"center"}}>
                <h1>Welcome</h1>
                <button onClick={this.props.onLogOut} >Log Out</button>
            </div>
        );
    }
}

export default Home;
