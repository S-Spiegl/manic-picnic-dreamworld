import React, { useState } from "react";
import { loginUser } from '../actions/loginUserAction.js'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import SignUp from "./SignUp.js";
import Login from "./Login.js";



export default function Navbar() {
  const userData  = useSelector((state) => state.user)

  if(userData.userName){
    return (
      <nav>
        <div>Logo</div>
        <div className="nav-container">
          <div data-cy="navbar-welcome">Hi, {userData.userName}</div>
        </div>
      </nav>
    )
  }
  else{
    return (
      <nav>
        <div className="nav-container-first-row">
          <div className="logo-container">
            <div className="logo">Logo</div>  
          </div>
          <div className="signup-and-login-container">
            <div>Login placeholder</div>
            <div>Signup placeholder</div>
          </div>
          <SignUp />
          <Login />
        </div>
        <div className="nav-container-second-row">
          List of site links go here - home, recipes, myKitchen etc
        </div>
      </nav>
    )
  }
  
}