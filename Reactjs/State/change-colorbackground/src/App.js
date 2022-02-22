import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color : "black",
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({color : "red"})
    }, 5000);
  }
  render() {
    return (
      <div>
        <div style={{width: 200, height : 200, background : this.state.color }}></div>
      </div>
    );
  }
}

export default App;
