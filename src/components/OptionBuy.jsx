import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const OptionBuy = () => {
  return (
    <Box>
      <Stack direction="column" gap={2}>
        {/* Total */}
        <Box>
          <Stack direction="row" px={2}>
            <Typography width="100%">ราคารวม</Typography>
            <Typography width="100%">1234</Typography>
          </Stack>
        </Box>
        {/* Buy Button */}
        <Box >
          <Stack direction="row" gap={1} p={1} bgcolor='white'>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#E67E22",
                "&:hover": {
                  backgroundColor: "#FA9A0A",
                },
              }}
            >
              ฟรี
            </Button>
            <Button
              variant="contained"
              sx={{
                flex: 1,
                bgcolor: "#03BC47",
                "&:hover": {
                  backgroundColor: "#12B538",
                },
              }}
            >
              ชำระเงิน
            </Button>
          </Stack>
        </Box>
        {/* Bill Button */}
        <Box>
          <Stack direction="row" gap={1} px={1}>
            <Button
              sx={{ color: "black", bgcolor: "white", flex: 1, boxShadow: 1 }}
            >
              แยกใบเสร็จ
            </Button>
            <Button
              sx={{ color: "black", bgcolor: "white", flex: 1, boxShadow: 1 }}
            >
              พักบิล
            </Button>
            <Button
              sx={{ color: "black", bgcolor: "white", flex: 1, boxShadow: 1 }}
            >
              ยกเลิกบิล
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default OptionBuy;
