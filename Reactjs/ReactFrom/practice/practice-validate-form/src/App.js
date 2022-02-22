import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [account, setAccount] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [isRequired, setIsRequired] = useState({
    type : "",
    status : false
  });
  const [isError, setIsError] = useState({
    type : "",
    status : false
  });
  const nameRef = useRef();


  const {userName, email, password, confirmPassword} = account;


  const MESSAGE_ERROR = {
    userName : "Ten phai co nhieu hon 2 ky tu va khong chu ky tu dac biet",
    email : "Email bi nhap loi, phai chua @ ",
    password : "Mat khau phai co nhieu hon 8 ky tu",
    confirmPassword : "Mat khau khong giong"
  }

  
  const REGEX = {
    userName: /^[a-zA-Z0-9 ]{2,}$/,
	  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	  password: /^[a-zA-Z0-9!@#$%$^&*)(+=._-]{8,}$/
    }
    
    const handleBlur = ({name, value}) => {
      setIsRequired({
        type : name,
        status : !value
      });

      name !== "confirmPassword" && setIsError({
        type : name,
        status : !REGEX[name].test(value)
      });

      name === "confirmPassword" && setIsError({
        type : name,
        status : value !== password
      })
    }
  
    const handleFocus = (e) => {
      setIsRequired(prev => ({
        ...prev,
        type : false
      }))
      setIsError(prev => ({
        ...prev,
        type : false
      }))
    }


  const handleChangeValue = (e) => {
    setAccount(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = () => {
    const check = userName && password && email && confirmPassword;
    check || alert("vui long nhap day du thong tin");
    check && setAccount({userName : '',
    email : "",
    password : '',
    confirmPassword : "" })
    check && !isError.status && !isRequired.status && alert(JSON.stringify(account, null, 2)) ;
    nameRef.current.focus();
  }

  return (
    <div className='container'>
      <h1> Sign in</h1>
      <div className='display' >
        <label htmlFor='userName'> userName :</label>
        <input
          value={userName}
          ref={nameRef}
          name="userName"
          id='userName'
          type={'text'}
          onChange={(e) => handleChangeValue(e)}
          onBlur={(e) => handleBlur(e.target)}
          onFocus={(e) => handleFocus(e)}
        />
      </div>
      {isRequired.status && isRequired.type ==="userName" && <p style={{color : "red"}}>Bat buoc nhap vao</p>}
      {isError.status && isError.type ==="userName" && <p style={{color : "red"}}>{MESSAGE_ERROR.userName}</p>}
      <div className='display'>
        <label htmlFor="email">Email :</label>
        <input
          value={email}
          name="email"
          id="email"
          type={'email'}
          onChange={(e) => handleChangeValue(e)}
          onBlur={(e) => handleBlur(e.target)}
          onFocus={(e) => handleFocus(e)}
        />
      </div>
      {isRequired.status && isRequired.type ==="email"  && <p style={{color : "red"}}>Bat buoc nhap vao</p>}
      {isError.status && isError.type ==="email" && <p style={{color : "red"}}>{MESSAGE_ERROR.email}</p>}

      <div className='display'>
        <label htmlFor='password'> Password :</label>
        <input
          value={password}
          name="password"
          id='password'
          type={'password'}
          onChange={(e) => handleChangeValue(e)}
          onBlur={(e) => handleBlur(e.target)}
          onFocus={(e) => handleFocus(e)}
        />
      </div>
      {isRequired.status && isRequired.type ==="password"  && <p style={{color : "red"}}>Bat buoc nhap vao</p>}
      {isError.status && isError.type ==="password" && <p style={{color : "red"}}>{MESSAGE_ERROR.password}</p>}
      <div className='display'>
        <label htmlFor='confirmPassword'> Confirm Password :</label>
        <input
          value={confirmPassword}
          name="confirmPassword"
          id='confirmPassword'
          type={'password'}
          onChange={(e) => handleChangeValue(e)}
          onBlur={(e) => handleBlur(e.target)}
          onFocus={(e) => handleFocus(e)}

        />
      </div>
      {isRequired.status && isRequired.type ==="confirmPassword"  && <p style={{color : "red"}}>Bat buoc nhap vao</p>}
      {isError.status && isError.type ==="confirmPassword" && <p style={{color : "red"}}>{MESSAGE_ERROR.confirmPassword}</p>}
      <button 
        onClick={handleSubmit}
        style={{
          width :"300", 
          margin: "20px",
          fontSize : "20px"
          }}
  
      >Submit</button>
    </div>
  )
}

export default App;