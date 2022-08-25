import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { loginUser } from '../actions/loginUserAction.js'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import { Provider } from 'react-redux'
import store from "../store/store.js";

function Navbar() {

  const userData  = useSelector((state) => state.user)


    if(1 == 2){
      return (
        <nav>
          <div className="nav-container-first-row">
            <div className="logo-container">
              <div className="logo">Logo</div>  
            </div>
            
           
          {/* <div>
           <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          </div>  */}
          </div>
          <div className="nav-container">
          <div data-cy="navbar-welcome">Hi, {userData.userName}</div>
        </div>
          <div className="nav-container-second-row">
            List of site links go here - home, recipes, myKitchen etc
          </div>
        </nav>
      );
      
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
            {/* <SignUp />
            <Login /> */}
          </div>
          <div className="nav-container-second-row">
            List of site links go here - home, recipes, myKitchen etc
          </div>
        </nav>
      )
    }
}

export default Navbar;

