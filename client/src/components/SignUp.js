import React, { useState } from "react";
import { addUser } from '../actions/addUser.js'
import { useDispatch } from 'react-redux';

const SignUp = ({Signup, error}) => {
   
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    fridge: []
  })

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          className="drop-down-list-item"
          placeholder="Choose username"
          required 
          value={userData.userName} onChange={e => setUserData({...userData, userName: e.target.value})}
        />
        <input 
          type="password"
          name="password"
          className="drop-down-list-item"
          placeholder="Choose password"
          required
          value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}
        />
        <input 
          type="email"
          name="email"
          className="drop-down-list-item"
          placeholder="Enter your email"
          required
          value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} 
        />
        <button className="drop-down-list-item">Signup</button>
      </form>
    </div>
  );
}

export default SignUp;