import React from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Menu from "../components/Menu";

const Layout = ({ isMenu, setIsMenu }) => {
  return (
    <>
      <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />
      <Stack direction="row">
        <SideNav />
        <Outlet />
        <Box display={isMenu ?'block':'none'}>
          <Menu />
        </Box>
      </Stack>
    </>
  );
};

export default Layout;
