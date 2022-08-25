import React from 'react';
import Navbar from "../components/navbar.jsx";
function Home() {
    return (
        <div className="master-container">
        <div className="navbar-main-container">
          {/* <Navbar /> */}
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

export default Home;


// import React, { useEffect, useState } from "react"; 

// import { useDispatch } from "react-redux";
// // import SignUp from "./components/SignUp.js";
// // import Login from "./components/Login.js";
// // import Navbar from "./components/Navbar.js";

// function Home() {

//   const dispatch = useDispatch();


//   return (
//     <h1>test</h1>
    // <div className="master-container">
    //   <div className="navbar-main-container">
    //     {/* <Navbar /> */}
        
    //   </div>
    //   <div className="central-container-one-master">
    //     <div className="central-container-one">
    //       <div className="central-container-text-box">
    //       </div>
    //     </div>
    //   </div>
    //   <div className="central-containers-master">
    //     <div className="central-container-two">
    //       Three selected meals
    //     </div>
    //     <div className="central-container-three">
    //       Not sure what to put in this section yet 
    //     </div>
    //   </div>
    // </div>
    
//   );
// }

// export default Home;