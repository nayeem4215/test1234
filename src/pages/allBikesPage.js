import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getBikes } from "../actions/bikes";
import BikeCard from "../components/bikeCard";
import BikeCarousel from "../components/bikeCarousel/bikeCarousel";
import PopularBikes from "../components/popularBikes/popularBikes";

export default function AllBikesPage() {
  let [bikes, setBikes] = useState([]);
  useEffect(() => {
    getBikes(setBikes);
  }, []);
  return (
    <Box
      sx={{
        mt: 3,
        px: 10,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{
            mb: 3,
          }}
          variant="h3"
        >
          Browse Thousands of Bikes
        </Typography>
        <Grid container spacing={2}>
          {bikes.length > 0 &&
            bikes.map((b, i) => (
              <Grid key={b._id} item sm={3}>
                <BikeCard bike={b}></BikeCard>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
