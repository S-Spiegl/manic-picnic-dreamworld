import React, { useState } from "react";
import { loginUser } from '../actions/loginUserAction.js'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";



export default function Navbar() {
  const userData  = useSelector((state) => state.user)

  if(userData.userName){
    return (
      <nav>
        <div className="nav-container">
          <div data-cy="navbar-welcome">Hi, {userData.userName}</div>
        </div>
      </nav>
    )
  }
  else{
    return (
      <nav>
        <div className="nav-container">
          <div></div>
          {/* <div>{userData.userName}</div> */}
        </div>
      </nav>
    )
  }
  
}