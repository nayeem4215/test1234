import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBrandedBikes } from "../actions/bikes";
import BikeCard from "../components/bikeCard";

export default function BrandBikePage() {
  let { brand } = useParams();
  let [bikes, setBikes] = useState([]);
  useEffect(() => {
    getBrandedBikes(brand, setBikes);
  }, []);
  return (
    <Box sx={{ mt: 3 }}>
      <Paper sx={{ minHeight: "90vh", px: 14, py: 5 }}>
        {" "}
        <Typography variant="h2" sx={{ mb: 5 }}>
          Official {brand.toUpperCase()} Bikes
        </Typography>
        <Grid container spacing={2}>
          {bikes.length > 0 &&
            bikes.map((b, i) => (
              <Grid key={b._id} item sm={3}>
                <BikeCard bike={b}></BikeCard>
              </Grid>
            ))}
        </Grid>
      </Paper>
    </Box>
  );
}
