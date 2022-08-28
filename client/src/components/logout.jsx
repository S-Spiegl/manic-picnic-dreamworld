import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../actions/logoutUserAction.js'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";



function LogoutComponent (props, {Logout, error}) {

  let navigate = useNavigate();
   
  const userData = {
    userName: '',
    email: '',
    password: '',
    fridge: []
  }

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logoutUser(userData));
    // dispatch(resetMealData())
    // props.setLoggedInStatus(false);
    navigate("/")
  };

  return (
    <div className="main-drop-down-container">
      <div className="drop-down-container"> 
        <form onClick={handleSubmit}>
          <div className="drop-down-header">
            {"Logout"}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogoutComponent;