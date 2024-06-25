import React from "react";
import NavBar from "./Components/Navbar";
import { Outlet } from "react-router";

const WithoutClothing = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default WithoutClothing;
