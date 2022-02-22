import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keypressed : "",
    }
  }
  
  onChangeKey = (e) => {
    this.setState({keypressed : e.keyCode})
  }
  render() {
    return (
      <div>
        <h1> {this.state.keypressed}</h1>
        <input onKeyDown={(e) => (this.onChangeKey(e))}/>
      </div>
    );
  }
}

export default App;
