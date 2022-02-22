import React, { Component } from 'react';
import Main from './Component/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header : "Day la header  tu state",
      content : "Day la content tu state"
    }
  }
  

  render() {
    return (
      <div>
        <Main headerProps= {this.state.header} contentProps = {this.state.content}></Main>
      </div>
    );
  }
}

export default App;
