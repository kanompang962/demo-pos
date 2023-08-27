import { Stack } from "@mui/material";
import React from "react";
import OptionMenu from "./OptionMenu";
import CartList from "./CartList";
import OptionBuy from "./OptionBuy";

const Menu = () => {
  return (
    <Stack
      sx={{ boxShadow: 3 }}
      direction="column"
      bgcolor="#ECF0F1"
      height="86vh"
      gap={2}
    >
      {/* Header */}
      <OptionMenu />
      {/* Center */}
      <CartList />
      {/* Footer */}
      <OptionBuy />
    </Stack>
  );
};

export default Menu;
