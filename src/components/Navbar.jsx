import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { navItem } from "../contents/content";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box bgcolor="white" width="100%" height={80} mb={3}>
      <Stack direction="row" width="100%" height="100%">
        {/* Logo */}
        <Typography
          width={180}
          fontSize={30}
          color="#ffcb00"
          height="100%"
          alignItems="center"
          justifyContent="center"
          sx={{ display: "flex" }}
        >
          Logo
        </Typography>
        {/* Item */}
        <Stack direction="row" width="100%">
          {navItem.map((item) => (
            <Button
              key={item.id}
              sx={{
                width: "100%",
                color: "black",
                borderBottom: item.id === 1 ? 4 : 0,
                borderBottomColor: "orange",
              }}
            >
              {item.title}
            </Button>
          ))}
          <Stack
            width="100%"
            sx={{
              direction: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button sx={{ bgcolor: "#efefef", color: "black" }}>
              <Menu />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

const styles = {
  btn_nav: {
    width: "100%",
    color: "black",
  },
};

export default Navbar;
