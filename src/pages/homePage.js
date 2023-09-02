import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getBikes } from "../actions/bikes";
import BikeBrands from "../components/bikeBrands";
import BikeCard from "../components/bikeCard";
import BikeCarousel from "../components/bikeCarousel/bikeCarousel";
import PopularBikes from "../components/popularBikes/popularBikes";
import HomePosts from "../components/homePosts/homePosts";

export default function Homepage() {
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
      <BikeCarousel />
      <Box sx={{ mt: 5 }}>
        <PopularBikes />
      </Box>
      <HomePosts />
      <Box sx={{ mt: 5 }}>
        <BikeBrands />
      </Box>
    </Box>
  );
}
