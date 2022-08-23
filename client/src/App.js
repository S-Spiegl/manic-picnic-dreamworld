import React, { useEffect, useState } from "react"; 

import { useDispatch } from "react-redux";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js";

const App = () => {

  const dispatch = useDispatch();


  return (
    <div>
      <Navbar />
      <SignUp />
      <Login />
    </div>
  );
}

export default App;