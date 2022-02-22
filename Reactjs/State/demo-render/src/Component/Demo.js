import React, { Component } from 'react';

class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text : "",
            input : "",
            model : "view"
        }
    }
    
    handleChange(e) {
        this.setState({input : e.target.value});
    }

    handleEdit() {
        this.setState({model :" edit"});
    }

    handleSave() {
        this.setState({text :this.state.input, model : "view"});
    }
    render() {
       if(this.state.model === "view") {
        return (
            <div>
                <p> Text : {this.state.text}</p>
                <button onClick={() => (this.handleEdit())}>Edit</button>
            </div>
        );
       }else {
        return (
            <div>
                <p> Text : {this.state.text}</p>
                <input onChange={(e) => (this.handleChange(e))}></input>
                <button onClick={() => (this.handleSave())}>Save</button>
            </div>
        );
       }
    }
}

export default Demo;
