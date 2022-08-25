import React, { useEffect, useState } from "react"; 

import { useDispatch } from "react-redux";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js";

const App = () => {

  const dispatch = useDispatch();


  return (
    <div className="master-container">
      <div className="navbar-main-container">
        <Navbar />
      </div>
      <div className="central-container-one-master">
        <div className="central-container-one">
          <div className="central-container-text-box">
          </div>
        </div>
      </div>
      <div className="central-containers-master">
        <div className="central-container-two">
          Three selected meals
        </div>
        <div className="central-container-three">
          Not sure what to put in this section yet 
        </div>
      </div>
    </div>
    
  );
}

export default App;