import InputSearch from "./InputSearch";
import { Box, Button, Input, Stack, TextField } from "@mui/material";
import React from "react";

const Search = () => {
  return (
    <Stack direction="column" width="100%" gap={2}>
      <Stack direction="row" width="100%" gap={2}>
        <InputSearch place='ค้นหาเมนูอาหาร' />
        <InputSearch place='ค้นหาประเภทอาหาร' />
      </Stack>
      <Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#ffcb00",
            color: "black",
          }}
        >
          ทั้งหมด
        </Button>
      </Box>
    </Stack>
  );
};

export default Search;
