import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { foods } from "../contents/content";

const CartList = () => {
  return (
    <Stack direction="column" height='56%' >
      {/* Header */}
      <TableContainer sx={{  height: "100%" }} component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead sx={{ display: "sticky" }}>
            <TableRow>
              <TableCell>รายการ</TableCell>
              <TableCell align="right">จำนวน</TableCell>
              <TableCell align="right">จำนวนเงิน</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foods.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">{row.price} $</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default CartList;
