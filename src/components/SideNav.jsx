import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { sideItem } from "../contents/content";

const SideNav = () => {
  return (
    <Box
      height={{ xs: "100%", md: "86vh" }}
      minWidth="165px"
      bgcolor={{ xs: "transparent", md: "white" }}
      sx={{ overflowY: "auto", overflowX: "auto", boxShadow: { xs: 0, md: 3 } }}
    >
      <Stack direction={{ xs: "row", md: "column" }} padding={3} gap={2}>
        {sideItem.map((item) => (
          <Button
            key={item.id}
            variant="outlined"
            sx={{
              color: "black",
              backgroundColor: item.id === 1 ? "#ffcb00" : "white",
              borderColor: "#e6e6e6",
              minWidth: "100px",
              height: "55px",
              borderRadius: "6px",
            }}
          >
            {item.title && item.title.slice(0, 12)}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default SideNav;
