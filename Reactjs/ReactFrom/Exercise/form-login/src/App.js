import React, { useState } from "react";
import { Formik } from "formik";
import './App.css';


function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const [account, setAccount] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { name, email, phone, message } = account;

  const handleChangeValue = (e) => {
    setAccount(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleValidate = () => {
    const errors = {};

    if (!name) {
      errors.name = "Required";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!phone) {
      errors.phone = "Required";
    }
    return errors;
  }

  const handleSubmit = () => {
    alert("Submit success !!!")
  }

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={account}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
              <label htmlFor="name"> Name :</label>
              <input
                value={name}
                type={'text'}
                id="name"
                name="name"
                onChange={handleChangeValue}
              />
              <p className="error">{errors.name}</p>
            </div>
            <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
              <label htmlFor="email"> email :</label>
              <input
                value={email}
                type={'text'}
                id="email"
                name="email"
                onChange={handleChangeValue}
              />
              <p className="error">{errors.email}</p>
            </div>
            <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
              <label htmlFor="phone"> phone :</label>
              <input
                value={phone}
                type={'text'}
                id="phone"
                name="phone"
                onChange={handleChangeValue}
              />
              <p className="error">{errors.phone}</p>
            </div>
            <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`}>
              <label htmlFor="message"> message :</label>
              <input
                value={message}
                type={'text'}
                id="message"
                name="message"
                onChange={handleChangeValue}
              />
              <p className="error">{errors.message}</p>
            </div>
            <button type="submit">Submit</button>
          </form>


        )}
      </Formik>
    </div>
  );
}

export default App;
