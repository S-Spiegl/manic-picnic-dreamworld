import React, { useState } from "react";
import { loginUser } from '../actions/loginUserAction.js'
import { useDispatch } from 'react-redux';



const Login = (props, {Login, error}) => {
   
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    fridge: []
  })

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
    //can't get below to work for userName, seems to be set to blank... 
    console.log(userData.email);
    // props.setLoggedInStatus(true)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="email"
          name="email"
          data-cy="login-email"
          className="drop-down-list-item"
          placeholder="Enter your email"
          required
          value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} 
        />
        <input 
          type="password"
          name="password"
          data-cy="login-password"
          className="drop-down-list-item"
          placeholder="Choose password"
          required
          value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}
        />
        <button className="drop-down-list-item" data-cy="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;