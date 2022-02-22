import React, { useState } from 'react';
import {Formik} from "formik";

function App () {
  const REGEX = {
    email : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const [form, setForm] = useState({

  });

  const handleChange =(e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleValidate = () => {
    const errors = {};
    if(!form.email) {
      errors.email = "Required";
    }else if(!REGEX.email.test(form.email)) {
      errors.email = "Invilid email address";
    }
    if(!form.title) {
      errors.title = "Required";
    }

    return errors;
  }
  const handleSubmit = () => {
    alert(JSON.stringify(form,null,2));
  }
  return (
    <div>
      <h1>Form Mail</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
      {({errors, handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
            <label>To :</label>
            <input 
              value={form.email}
              type={"email"}
              name="email"
              onChange={handleChange}
            />
            <p className='error'>{errors.email}</p>
          </div>
          <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
            <label>Title :</label>
            <input 
              value={form.title}
              type={"title"}
              name="title"
              onChange={handleChange}
            />
            <p className='error'>{errors.title}</p>
          </div>
          <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`}>
            <label>Message :</label>
            <input 
              value={form.message}
              type={"message"}
              name="message"
              onChange={handleChange}
            />
            <p className='error'>{errors.message}</p>
          </div>
          <div className="custom-input">
                <input type="file" id="fileUpload" onChange={handleChange} />    
              </div>
              <button type="submit"> Submit </button>
        </form>
      )}
      </Formik>
    </div>
  );
}

export default App;
