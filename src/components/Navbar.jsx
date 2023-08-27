import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { navItem } from "../contents/content";
import { Menu } from "@mui/icons-material";

const Navbar = ({isMenu, setIsMenu}) => {

const toggleMenuBar = () => {
  setIsMenu((prev)=>!prev);
}

console.log(isMenu);

  return (
    <Box bgcolor="white" width="100%" height={80} mb={3} boxShadow={3}>
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
                position: "relative",
                width: "100%",
                color: "black",
                borderBottom: item.id === 1 ? 4 : 0,
                borderBottomColor: "orange",
              }}
            >
              {item.title}
              {/* count */}
              {item.id === 2 && (
                <Stack
                  position="absolute"
                  top={15}
                  right={90}
                  width={20}
                  height={20}
                  borderRadius='50%'
                  bgcolor="red"
                  color="white"
                  justifyContent='center'
                  alignItems='center'
                >
                  9
                </Stack>
              )}
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
            <Button onClick={()=>toggleMenuBar()} sx={{ bgcolor: "#efefef", color: "black" }}>
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
