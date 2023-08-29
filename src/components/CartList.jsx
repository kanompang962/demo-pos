import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { foods, rows } from "../contents/content";
import { MyCartContext } from "../context/context";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./../contents/content";
import { Add, HorizontalRule, SearchOutlined } from "@mui/icons-material";

const CartList = () => {
  const { cart, toggledQuantity } = MyCartContext();

  // const [amount, setAmount] = useState(1);

  // const handleAmount = (e) => {
  //   setAmount(e.target.value)
  // }

  return (
    // <Box sx={{ height: "100%", width: "100%" }}>
    //   <DataGrid
    //     sx={{ bgcolor: "white" }}
    //     rows={cart}
    //     columns={columns}
    //     initialState={{
    //       pagination: {
    //         paginationModel: {
    //           pageSize: 5,
    //         },
    //       },
    //     }}
    //     pageSizeOptions={[5]}
    //     disableRowSelectionOnClick
    //   />
    // </Box>
    <Stack direction="column" height="60%">
      <TableContainer sx={{ height: "100%" }} component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead sx={{ display: "sticky" }}>
            <TableRow>
              <TableCell>รายการ</TableCell>
              <TableCell align="right">จำนวน</TableCell>
              <TableCell align="right">จำนวนเงิน</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right" width="30%">
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      borderRadius: 1,
                    }}
                  >
                    <IconButton
                      onClick={() => toggledQuantity(row.id, "decrement")}
                      type="button"
                    >
                      <HorizontalRule />
                    </IconButton>
                    <InputBase
                      sx={{
                        width: "25px",
                        fontSize: { xs: 10, md: 14 },
                        ml: 2,
                        flex: 1,
                      }}
                      // onChange={(e)=>handleAmount(e)}
                      value={row.quantity}
                    />
                    <IconButton
                      onClick={() => toggledQuantity(row.id, "increment")}
                      type="button"
                    >
                      <Add />
                    </IconButton>
                  </Paper>
                </TableCell>
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
