import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fakeLogin } from "../../redux/action";

function Login () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username : '',
        password : '',
    });

    const userlogined = useSelector(state => state.uselogined);
    const setValueForUser = (key, value) => {
        const newVal = { ...user, [key]: value };
        setUser(newVal);
    }
    const login = () => {
        dispatch((user));
    }

    useEffect(() => {
       if(userlogined.username) {
           navigate('../user')
       }
    }, [userlogined]);

    return (
        <form>
            <label>User name</label>
            <input id="username" onChange={(e) => setValueForUser('username', e.target.value)} type="text" />
            <label>Password</label>
            <input id="password" onChange={(e) => setValueForUser('password', e.target.value)} type="password" />
            <button type="button" onClick={() => { login() }}>Login</button>
        </form>
    );
}

export default Login ;