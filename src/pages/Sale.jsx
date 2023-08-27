import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import Search from "../components/Search";
import { foods } from "../contents/content";
import FoodCard from "../components/FoodCard";

const Sale = () => {
  return (
    <Stack
      direction="column"
      width="100%"
      height="86vh"
      mx={3}
      sx={{ overflowX: "auto" }}
    >
      <Search />
      {/* <Divider sx={{ height: 28 }} orientation="horizontal" /> */}
      <Stack direction={"row"} flexWrap="wrap" gap={2} justifyContent="start">
        {foods.map((item, index) => (
          <Box key={index} sx={{ color: "white" }}>
            {item && <FoodCard item={item} />}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sale;
