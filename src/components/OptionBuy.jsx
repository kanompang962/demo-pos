import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const OptionBuy = () => {
  return (
    <Box>
      <Stack direction="column">
        {/* Total */}
        <Box>
          <Stack direction="row" px={2}>
            <Typography width="100%">ราคารวม</Typography>
            <Typography width="100%">1234</Typography>
          </Stack>
        </Box>
        {/* Buy Button */}
        <Box>
          <Stack direction='row'>
            <Button variant="contained">ฟรี</Button>
            <Button variant="contained">ชำระเงิน</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default OptionBuy;
