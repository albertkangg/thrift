import React from "react";
import NavBar from "./Components/Navbar";
import ClothingMenu from "./Components/ClothingMenu";
import { Outlet } from "react-router";

const WithClothing = () => {
  return (
    <>
      <NavBar />
      <ClothingMenu />
      <Outlet />
    </>
  );
};

export default WithClothing;
