import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../actions/loginUserAction.js'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";



function LoginComponent (props, {Login, error}) {

  let navigate = useNavigate();
   
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    kitchen: []
  })

  const newUserData  = useSelector((state) => state.user)

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
    console.log(newUserData);
    if(newUserData.email){
      navigate("/")};
      //the above checks the store and assigns the userData to newUserData, then
      //checks if said newUserData exists. if it does, it redirects... however, you have to
      //click twice.. once to login, and once to redirect ... how to fix this?

    //can navigate await a successful login?
    //can navigate be called from the action, and therefore
    //only work when login is successful?
    //problem is that the logic for whether a login is successful or not is held in
    //the controller, so I can't work out how to make the redirect/navigate conditional
    //upon correct credentials. All the redirect tutorials assume the logic for logging
    //in is done at the frontend, but all mine is in the backend. 
    //other big issue is how to make state persist, so that after the login is successful,
    //the state of the homepage will change to show a user's details...
    
    // props.setLoggedInStatus(true)
  };

  return (
    <div className="sign-up-container">
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

export default LoginComponent;

