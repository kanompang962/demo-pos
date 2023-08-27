import { CheckCircle, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const FoodCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "190px" },
        boxShadow: 3,
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
      <CardContent sx={{ backgroundColor: "white", height: "60px", p:1 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2" fontWeight="semibold">
            {item.title && item.title.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
          <Box>
            <Button sx={{color:'black'}}>
              <MoreVert />
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
