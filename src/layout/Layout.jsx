import React from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import Menu from "../components/Menu";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row">
        <SideNav />
        <Outlet />
        <Menu />
      </Stack>
    </>
  );
};

export default Layout;
