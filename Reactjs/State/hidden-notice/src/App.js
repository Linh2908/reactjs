import React, { Component } from 'react';
import Hello from './Component/Hello';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display : true,
    }

  }
  
  deleteComponent() {
    this.setState({display : false})
  }
  render() {

    let comp;

    if(this.state.display) {
      comp = <Hello/>;
    }
    return (
      <div style={{textAlign : "center"}}>
        {comp}
        <button onClick={() => (this.deleteComponent())}>Delete Component</button>
      </div>
    );
  }
}

export default App;
