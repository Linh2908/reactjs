import React, {  useRef, useState } from 'react';

const App = () => {
  const [account, setAccount] = useState({
    email: "",
    password: ""
  });

  const [isError, setIsError] = useState(false);
  const passRef = useRef();

  const { email, password } = account;

  const handleChangeAccount = (e) => {
    setAccount((prev) => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }

  const handleBlur = () => {
    setIsError(password.length < 8);
  }

  const handleSubmit =(e) => {
    e.preventDefault();
     isError || alert(`${email} ${password}`)
  }

  return (
    <div>
      <div>

        <input
          value={email}
          name="email"
          placeholder="Enter Email ..."
          onChange={(e) => (handleChangeAccount(e))}
        />
      </div>
      <div>

        <input
          ref={passRef}
          value={password}
          type={"password"}
          name="password"
          placeholder='Enter Password...'
          onChange={(e) => (handleChangeAccount(e))}
          onBlur = {handleBlur}
        />

      </div>
      {isError && <span>Mat khau qua ngan</span>}

      <button onClick={handleSubmit} style={{display: "block"}}>Submit</button>
    </div>
  );
}

export default App;
