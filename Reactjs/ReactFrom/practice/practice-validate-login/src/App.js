import React, { useRef, useState } from "react";

function App() {
  const [account, setAccount] = useState({
    email : "",
    password : ""
  });
  const [isError, setIsError] = useState({
    type : "",
    status : false
  });
  const nameRef = useRef();

  const MESSAGE_ERROR ={
    email : "email error",
    password : "password error"
  }
  const REGEX = {
	  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	  password: /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/
  }
  const {email, password} = account;

  const handleChangeValue = ({target}) => {
    setAccount(prev => ({
      ...prev,
      [target.name] : target.value
    }))
  }

  const handleBlur = ({target}) => {
    setIsError({
      type : target.name,
      status : !REGEX[target.name].test(target.value)
    })
  }

  const handleFocus =() => {
    setIsError(prev => ({
      ...prev,
      type: false
    }))
  } 

  const handleSubmit = () => {
    isError.status && alert("Dang nhap dung roi nha")
  }

  console.log(isError);

 
  return (
    <div className="App">
     <form >
       <div className="form-item">
         <label htmlFor="email">Email</label>
         <input 
            id="email"
            value={email}
            name="email"
            ref={nameRef}
            onChange={(e) => handleChangeValue(e)}
            placeholder="EX : tuan12@gmail.com"
            onBlur={(e) => handleBlur(e)}
            onFocus={handleFocus}
          />
       </div>
       {
         isError.type === "email" && isError.status && <p>{MESSAGE_ERROR.email}</p>
       }
       <div className="form-item">
         <label htmlFor="password">password</label>
         <input 
            id="password"
            name="password"
            value={password}
            type={"password"}
            onChange={(e) => handleChangeValue(e)}
            onBlur={(e) => handleBlur(e)}
            onFocus={handleFocus}
            placeholder="EX : I don't know "
          />
       </div>
       {
         isError.type === "password" && isError.status && <p>{MESSAGE_ERROR.password}</p>
       }
       <button onClick={handleSubmit}>Submit</button>
     </form>
    </div>
  );
}

export default App;
