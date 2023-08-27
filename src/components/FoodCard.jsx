import { CheckCircle, MoreVert } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const FoodCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "200px" },
        boxShadow: "none",
        borderRadius: "6px",
        background: "transparent",
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
      <CardContent sx={{ backgroundColor: "white", height: "70px" }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1" fontWeight="semibold">
            {item.title && item.title.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
          <Button sx={{ bgcolor: "#ffcb00", color: "black" }}>
            <MoreVert />
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
