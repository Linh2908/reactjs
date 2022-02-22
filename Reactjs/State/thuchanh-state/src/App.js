import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number : 0
    }
  }
  
  increment = () => (
    this.setState({number : this.state.number + 1})
  )

  decrease = () =>{
    this.setState({number : this.state.number - 1})
  }
  render() {
    return (
      <div style={{padding : 60}}>
        <button onClick={()=> (this.increment())}>Increment</button>
        <span style={{padding : 60}}>{this.state.number}</span>
        <button onClick={() =>(this.decrease())}>Decreade</button>
      </div>
    );
  }
}

export default App;
