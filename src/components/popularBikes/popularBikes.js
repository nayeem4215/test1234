import { Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPopularBikes } from "../../actions/bikes";
import BikeCard from "../bikeCard";

export default function PopularBikes() {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    getPopularBikes(setBikes);
  }, []);
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        sx={{
          mb: 5,
        }}
        variant="h2"
      >
        Popular Bikes in the worlds
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
  );
}
