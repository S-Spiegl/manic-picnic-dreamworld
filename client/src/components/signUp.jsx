import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from '../actions/addUser.js'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

function SignUpComponent (props, {Signup, error}) {

  let navigate = useNavigate();
   
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    fridge: []
  })

  const newUserData  = useSelector((state) => state.user)

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    console.log(newUserData)
    //why does signup not return the user's email to store, only their name and id???
    //this is why I had to check for a username, not an email upon signup in the below conditional 
    if(newUserData.userName){
      navigate("/")};
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          data-cy="signup-username"
          className="drop-down-list-item"
          placeholder="Choose username"
          required 
          value={userData.userName} onChange={e => setUserData({...userData, userName: e.target.value})}
        />
        <input 
          type="email"
          name="email"
          data-cy="signup-email"
          className="drop-down-list-item"
          placeholder="Enter your email"
          required
          value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} 
        />
        <input 
          type="password"
          name="password"
          data-cy="signup-password"
          className="drop-down-list-item"
          placeholder="Choose password"
          required
          value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}
        />
        <button className="drop-down-list-item" data-cy="signup-button">Signup</button>
      </form>
    </div>
  );
}

export default SignUpComponent;