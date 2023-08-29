import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <Box width="100vw" height="100vh" overflow="hidden">
      <Stack direction="row" width="100%" height="100%">
        <Box width="65%" display={{xs:'none',md:"flex"}} >
          <img
            style={{ objectFit: "cover" }}
            width="100%"
            src="https://cdn.pixabay.com/photo/2017/10/14/02/49/gatlinburg-2849673_640.jpg"
            alt="auth"
          />
        </Box>
        <Box display="flex" width={{xs:'100%',md:"35%"}}>
          <Stack direction="column" width="100%" px={8} py={15} gap={2}>
            <Typography variant="h4" mb={4}>
              เข้าสู่ระบบ
            </Typography>
            <TextField variant="filled" />
            <TextField type="password" variant="filled" />
            <Typography color="blue">ลืมรหัสผ่าน</Typography>
            <Box width="100%">
              <Link to={"/home"}>
                <Button
                  variant="contained"
                  sx={{ width: "100%", color: "black" }}
                >
                  เข้าสู่ระบบ
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Auth;
