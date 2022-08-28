import React, { useState } from "react";
import { logoutUser } from '../actions/logoutUserAction.js'
import { useDispatch } from 'react-redux';
// import { resetMealData } from "../actions/resetMealsData.js";



const Logout = (props, {Logout, error}) => {
   
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

export default Logout;