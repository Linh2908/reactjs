import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [],
      item : ""
    }
  }

  handleChange = (e) => {
    this.setState({item : e.target.value })
  }
  
  handleAddItem = () => {
      if(this.state.item) {
        const newList = this.state.list;
        newList.push(this.state.item);
        this.setState({list : newList, item : ""})
      }
  }
  render() {
    const {list, item} = this.state;
    return (
      <div style={{textAlign : "center"}}>
        <div>
          <input value={item} onChange={(e) =>(this.handleChange(e))}/>
          <button onClick={() =>(this.handleAddItem())}>ADD</button>
          {
            list.map((item, index) => (
              <div key={index}>{item}</div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
