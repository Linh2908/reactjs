import React, { useState } from "react";
import {Formik} from "formik";



function App() {
  const REGEX = {
    email : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  const [account, setAccount] = useState({
    email : "",
    password : ""
  });
  const {email, password} = account;

  const handleChangeValue = (e) => {
    setAccount(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  const handleValidate = () => {
    const errors = {};
    if(!email) {
      errors.email = "Required";
    }else if(!REGEX.email.test(email)) {
      errors.email = "Invalid email address";
    }

    if(!password) {
      errors.password = "Required";
    }
    return errors;
  }

  const handleSubmit = () => {
    console.log(account);
    alert("Login in success");
  }

  return (
    <div>
      <Formik
        initialValues={account}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({errors,handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
              <label htmlFor="email">Email :</label>
              <input
                value={email}
                type={"email"}
                name="email"
                id="email"
                placeholder="anh@agare.com"
                onChange={(e) => handleChangeValue(e)}
              />
              <p className="error">{errors.email}</p>
            </div>
            <div className={`custom-input ${errors.password ? "custom-input-error" : ""}`}>
              <label htmlFor="password">Password :</label>
              <input
                value={password}
                type={"password"}
                name="password"
                id="password"
                placeholder="12334..."
                onChange={(e) => handleChangeValue(e)}
              />
              <p className="error">{errors.password}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
