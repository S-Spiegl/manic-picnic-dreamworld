import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { loginUser } from '../actions/loginUserAction.js'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import SignUp from "./signUp.jsx";
import Login from "./Login.js";
import { Provider } from 'react-redux'
import store from "../store/store.js";
import logoutComponent from "./logout.jsx";
import LogoutComponent from "./logout.jsx";

function Navbar() {

  const userData  = useSelector((state) => state.user)


    if(userData.email){
      //i.e. if there is something in the store... 
      return (
        <nav>
          <div className="nav-container-first-row">
            <div className="logo-container">
              <div className="logo">Logo</div>  
            </div>
            <div className="signup-and-login-container">
            <div><LogoutComponent /></div>
            </div>
          </div>
          <div className="nav-container-second-row">
          <div data-cy="navbar-welcome-container" className="navbar-welcome-container">
            <div className="navbar-welcome">
              Hi, {userData.userName}
            </div>
          </div>
          <div className="nav-container-second-row">
            List of site links go here - home, recipes, myKitchen etc
            <div><Link to="/">Home</Link></div>
            <div><Link to="/kitchen">Kitchen</Link></div>
          </div>
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
              <div><Link to="/login">Login</Link></div>
              <div><Link to="/signup">Sign up</Link></div>
            </div>
            {/* <SignUp />
            <Login /> */}
            
          </div>
          <div className="nav-container-second-row">
            List of site links go here - home, recipes, myKitchen etc
            <div><Link to="/">Home</Link></div>
            <div><Link to="/kitchen">Kitchen</Link></div>
          </div>
        </nav>
      )
    }
}

export default Navbar;


// eslint-disable-next-line no-lone-blocks
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