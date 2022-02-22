import React, { useRef, useState } from 'react';

const App = () => {

  const [info, setInfo] = useState({
    name : "",
    email : "",
    password : "",
    confirmPassword : ""
  });

  const [isTrue, setIsTrue] = useState(true);
  const nameRef = useRef();
  const handlChangeValue =(e) => {
    setInfo(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  const handleBlur = () => {
     setIsTrue(password === confirmPassword);
  }

  const handleSubmit =() => {
    setInfo( {
      name : "",
      email : "",
      password : "",
      confirmPassword : ""

    })
    isTrue && alert( "Welcome ")
  }
  const {name,email, password, confirmPassword} = info;
  return (
    <div>
      <h1>Dang Nhap </h1>
      <form>
        <div>
          <label htmlFor='name'>Name : </label>
          <input id='name' 
            value={name}
            name="name"
            ref={nameRef}
            onChange={(e) => handlChangeValue(e)}
            />
        </div>
        <div>
          <label htmlFor='email'>Email : </label>
          <input id='email'
            name="email" 
            value={email}
            onChange={(e) => handlChangeValue(e)}
            />
        </div>
        <div>
          <label htmlFor='password'>Password : </label>
          <input id='password' 
            name='password'
            value={password}
            onChange={(e) => handlChangeValue(e)}
            />
        </div>
        <div>
          <label htmlFor='confirmPassword'>ConfirmPassword : </label>
          <input 
            id='confirmPassword' 
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e) => handlChangeValue(e)}
            onBlur={handleBlur}
            />
          {!isTrue && <span style={{color : "red"}}>Mat khau khong khop</span> }
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
