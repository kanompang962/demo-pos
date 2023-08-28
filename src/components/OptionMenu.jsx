import {
  Box,
  Button,
  InputBase,
  Menu,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { btnMenu } from "../contents/content";
import { Delete, MenuBook } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import DropdownCard from "./DropdownCard";

const OptionMenu = ({ setIsMenu }) => {
  return (
    <Stack direction="column">
      {/* Account */}
      <Box bgcolor="white" p={2}>
        <Stack direction="row" height={30} gap={2}>
          <Button
            onClick={() => setIsMenu(false)}
            variant="contained"
            sx={{
              mr: { sm: 4 },
              color: "black",
              bgcolor: "#ECF0F1",
              boxShadow: 0,
            }}
          >
            <MenuIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontSize: { xs: 10, md: 14 },
              color: "black",
              borderColor: "#ECF0F1",
            }}
          >
            เรียกพนักงาน
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: { xs: 10, md: 14 },
              color: "black",
              bgcolor: "#ECF0F1",
              boxShadow: 0,
            }}
          >
            POS1
          </Button>
          <Typography>admin</Typography>
          <Box
            width={32}
            height="100%"
            borderRadius="50%"
            bgcolor="#ffcb00"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            A
          </Box>
        </Stack>
      </Box>
      {/* Buttons */}
      <Stack bgcolor="white" direction="row" p={1} gap={1} width="100%">
        {btnMenu &&
          btnMenu.map((item) => (
            <Button
              key={item.id}
              variant="contained"
              startIcon={<Delete sx={{ width: { xs: "0px", md: "14px" } }} />}
              sx={{
                fontSize: { xs: 10, md: 14 },
                color: "black",
                backgroundColor: "#ffcb00",
                width: "120px",
                height: "35px",
              }}
            >
              {item.title}
            </Button>
          ))}
      </Stack>
      {/* Dropdown */}
      <Box bgcolor="transparent" width="100%" p={1}>
        <Stack direction="row" width="100%" height="35px" gap={1}>
          <DropdownCard  place="ลูกค้าทั่วไป" />
          <DropdownCard place="ทางร้าน" />
          <Paper
            component="form"
            sx={{
              p: "2px",
              display: "flex",
              alignItems: "center",
              borderRadius: 1,
            }}
          >
            <InputBase
              sx={{ ml: 1, width: "45px" }}
              placeholder="0"
              type="number"
            />
            <Typography fontSize={{xs:10,md:14}}>คน</Typography>
          </Paper>
          <Button
            variant="contained"
            sx={{
              fontSize:{xs:10,md:14} ,
              color: "white",
              backgroundColor: "#E67E22",
              width: "70%",
              height: "35px",
            }}
          >
            เลือกโต๊ะ
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default OptionMenu;
