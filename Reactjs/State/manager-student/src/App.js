import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students : [],
      form : {
        name : '',
        phone : '',
        email : ''
      },
      isValid : false,
      indexSelector : -1
    }
  }
  
  handleValue = (e) =>{
    this.setState((state) => {
      const {form} = state;
      form[e.target.name] = e.target.value;
      return {form};
    }, () => this.checkInvalidForm())
  }

  handleSelector = (studentSelector, index) =>{
      this.setState({
        form : JSON.parse(JSON.stringify(studentSelector)),
        indexSelector : index
      })
  }

  checkInvalidForm = () => {
    const { name, phone, email} = this.state.form;
    const value = email && name && phone;
    this.setState({isValid : value});
  }

  handleSunmit = () => {
    if(this.state.isValid) {
      const newList = this.state.students;
      if(this.state.indexSelector > -1) {
        newList.splice(this.state.indexSelector,1,this.state.form);
      }else {
        newList.push(this.state.form);
      }

      const newForm = {
        name : "",
        phone : '',
        email : ''
      }

      this.setState({
        students : newList, form : newForm, isValid : false, indexSelector : -1
      })
    }
  }

  handleDelete = (index) => {
    const newList = this.state.students;
    newList.splice(index, 1);
    this.setState({students : newList});
  }

  render() {
    const {students, form} = this.state;

    return (
      <div>
        <div>
          <h1>Student Manager</h1>
          <div>
            <label>Name :</label>
            <input value={form.name} name='name' type={"text"} onChange={(e) => (this.handleValue(e))}/>
          </div>

          <div>
            <label>Phone :</label>
            <input value={form.phone} name='phone' type={"tel"} onChange={(e) => (this.handleValue(e))}/>
          </div>

          <div>
            <label>Email :</label>
            <input value={form.email} name='email' type={"email"} onChange={(e) => (this.handleValue(e))}/>
          </div>

          <button onClick={() => (this.handleSunmit())}>Submit</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td>
                      <button onClick={() => (this.handleSelector(student,index))}>EDIT</button>
                      <button onClick={() => (this.handleDelete(index))}>Delete</button>
                    
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
