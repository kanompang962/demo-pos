import { Stack } from "@mui/material";
import React from "react";
import OptionMenu from "./OptionMenu";
import CartList from "./CartList";
import OptionBuy from "./OptionBuy";

const Menu = ({ setIsMenu}) => {
  return (
    <Stack
      width={{xs:'100vw',sm:'auto'}}
      boxShadow={3}
      direction="column"
      justifyContent='space-between'
      bgcolor="#ECF0F1"
      height="100vh"
      pb={1}
    >
      {/* Header */}
      <OptionMenu  setIsMenu={setIsMenu}/>
      {/* Center */}
      <CartList />
      {/* Footer */}
      <OptionBuy />
    </Stack>
  );
};

export default Menu;
