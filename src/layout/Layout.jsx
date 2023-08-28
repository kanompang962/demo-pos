import React from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Menu from "../components/Menu";

const Layout = ({ isMenu, setIsMenu }) => {
  return (
    <Stack position="relative" gap={{xs:0,sm:1,md:3}}>
      <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />
      <Stack direction={{ xs: "column", md: "row" }} overflow='hidden'>
        <SideNav />
        <Outlet />
      </Stack>
      <Box
        position="absolute"
        top={0}
        right={{sm:0}}
        display={isMenu ? "block" : "none"}
      >
        <Menu setIsMenu={setIsMenu} />
      </Box>
    </Stack>
  );
};

export default Layout;
