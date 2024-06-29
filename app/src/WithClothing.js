import React from "react";
import NavBar from "./components/Navbar";
import ClothingMenu from "./components/ClothingMenu";
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
