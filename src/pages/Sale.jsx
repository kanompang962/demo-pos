import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import Search from "../components/Search";
import { foods } from "../contents/content";
import FoodCard from "../components/FoodCard";

const Sale = ({ isMenu }) => {
  return (
    <Stack
      // bgcolor="blue"
      direction="column"
      width={isMenu ? "57vw" : "100%"}
      height={{xs:'75vh',sm:'80vh',md:"86vh"}}
      px={2}
      sx={{ overflowX: "auto" }}
    >
      <Search />
      <br />
      <Divider orientation="horizontal" />
      <br />
      <Stack
        direction="row" 
        flexWrap="wrap"
        gap={2}
        justifyContent={{ xs: "center", sm: "start" }}
      >
        {foods.map((item, index) => (
          <Box
            key={index}
            sx={{ color: "white", width: { xs: "46%",sm:'220px', md: "190px" } }}
          >
            {item && <FoodCard item={item} />}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sale;
