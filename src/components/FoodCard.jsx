import { CheckCircle, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { MyCartContext } from "../context/context";

const FoodCard = ({ item }) => {

  const {addQuantity} = MyCartContext();

  return (
    <div onClick={()=>addQuantity(item)}>
      <Card
        sx={{
          width: { xs: "100%", md: "190px" },
          boxShadow: 3,
          borderRadius: "6px",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <CardMedia
          image={item.img}
          alt={item.title}
          sx={{ position: "relative", width: "100%", height: 140 }}
        >
          {/* Price */}
          <Stack
            position="absolute"
            bottom={0}
            right={0}
            bgcolor="#ffcb00"
            borderRadius="6px"
            px={2}
            py={1}
            sx={{ opacity: 0.7 }}
          >
            {item.price} $
          </Stack>
        </CardMedia>
        {/* Description */}
        <CardContent sx={{ backgroundColor: "white", height: "60px", p: 1 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" fontWeight="semibold">
              {item.title && item.title.slice(0, 60)}
              {/* <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} /> */}
            </Typography>
            <Box>
              <Button sx={{ color: "black" }}>
                <MoreVert />
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodCard;
