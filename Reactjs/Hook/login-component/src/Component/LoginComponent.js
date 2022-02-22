import React, { useState,useRef } from 'react';

const Logincomponent = () => {
    const userRef = useRef();
    const [account, setAccount] = useState({
        userName : "",
        password : ""
    });

    const handleChangeAccount =  (key, value) => {
           const newAccount = {...account, [key] : value};
           setAccount(newAccount);
           
    }
    
    const handleLogin =() => {
        alert(`name : ${userName} password : ${password}`);
        setAccount({
            userName :"",
            password : ""
        });
        userRef.current.focus();
    }
    const {userName, password} = account;
    
    return (


        <div>
            <h1>Log in</h1>
            <input
                value={userName}
                ref={userRef}
                placeholder="Enter Name..."
                onChange={(e) => handleChangeAccount("userName",e.target.value)}
            />
            <input
                value={password}
                type={"password"}
                placeholder="Enter password..."
                onChange={(e) => handleChangeAccount("password",e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Logincomponent;
