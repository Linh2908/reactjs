import React, { Component } from 'react';
import Home from './Home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: "",
                password: "",
                isRemeber: false
            },
            isValid: false,
            isLoggedIn: false
        }
    }

    handleChange = (e) => {
        this.setState((state) => {
            const { form } = state;
            form[e.target.type] = e.target.value;
            return { form };
        }, () => (this.checkValidFrom()));
    }

    checkChangeCheckBox = () => {
        this.setState((state) => {
            const { form } = state;
            form.isRemeber = !form.isRemeber;
            return { form };
        }, () => (this.checkValidFrom()))
    }

    checkValidFrom = () => {
        const { email, password } = this.state.form;
        const value = email && password;
        this.setState({ isValid: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.isValid) {
            this.setState({ isLoggedIn: true })
        }
    }

    handleLogOut = () => {
        this.setState({ isLoggedIn: false })
    }
    render() {
        const { isLoggedIn, form } = this.state;
        if (isLoggedIn) return (<Home onLogOut={() => (this.handleLogOut())}></Home>)
        return (
            <div>
                <form className='container'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address :</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        value={form.email} onChange={(e) => (this.handleChange(e))} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password :</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={form.password} 
                        onChange={(e) => (this.handleChange(e)) } />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" value={form.isRemeber} onChange={() => (this.checkChangeCheckBox())}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => (this.handleSubmit(e))}>Submit</button>
                </form>
            </div>
        );
    }
}

export default App;
