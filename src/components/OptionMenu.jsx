import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { btnMenu } from "../contents/content";
import { Delete } from "@mui/icons-material";
import DropdownCard from "./DropdownCard";

const OptionMenu = () => {
  return (
    <Stack direction="column">
      {/* Buttons */}
      <Stack bgcolor='white' direction="row" p={1} gap={1} width="100%">
        {btnMenu &&
          btnMenu.map((item) => (
            <Button
              key={item.id}
              variant="contained"
              startIcon={<Delete sx={{ width: "14px" }} />}
              sx={{
                fontSize: "12px",
                color: "black",
                backgroundColor: "#ffcb00",
                width: "110px",
                height: "35px",
              }}
            >
              {item.title}
            </Button>
          ))}
      </Stack>
      {/* Dropdown */}
      <Box bgcolor="transparent" width="100%" p={2}>
        <Stack direction="row" width="100%" height="35px" gap={1}>
          <DropdownCard place="ลูกค้าทั่วไป" />
          <DropdownCard place="ทางร้าน" />
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              borderRadius: 1,
            }}
          >
            <InputBase
              sx={{ ml: 1, width: "50px" }}
              placeholder='0'
              type="number"
            />
            <Typography>คน</Typography>
          </Paper>
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#E67E22",
              width: "56%",
              height: "35px",
            }}
          >
            เลือกโต๊ะ
          </Button>
        </Stack>
      </Box>
      {/* Cart List */}
    </Stack>
  );
};

export default OptionMenu;
