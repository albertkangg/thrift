import React from "react";
import NavBar from "./components/Navbar";
import ClothingMenu from "./components/ClothingMenu";
import { Outlet } from "react-router";

export default () => {
  return (
    <>
      <NavBar />
      <ClothingMenu />
      <Outlet />
    </>
  );
};
