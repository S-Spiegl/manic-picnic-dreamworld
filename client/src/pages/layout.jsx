import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* Outlet basically tells React to display the component routed to in index.js */}
    </>
  );
};

export default Layout;