import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { sideItem } from "../contents/content";
import { Hiking } from "@mui/icons-material";

const SideNav = () => {
  return (
    <Stack
      sx={{ overflowY: "auto", boxShadow: 3 }}
      direction="column"
      bgcolor="white"
      minWidth='165px'
      height="86vh"
      padding={3}
      gap={2}
    >
      {sideItem.map((item) => (
        <Button
          key={item.id}
          variant="outlined"
          sx={{
            color: "black",
            backgroundColor: item.id === 1 ? "#ffcb00" : "",
            borderColor: "#e6e6e6",
            width: "100px",
            minHeight: "50px",
            borderRadius: "6px",
          }}
        >
          {item.title}
        </Button>
      ))}
    </Stack>
  );
};

export default SideNav;
