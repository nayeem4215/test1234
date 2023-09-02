import { Grid, Typography, Box } from "@mui/material";

import BikeCard from "../bikeCard";

export default function BikesList({ label, bikes }) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        sx={{
          mb: 5,
        }}
        variant="h2"
      >
        {label}
      </Typography>
      <Grid container spacing={2}>
        {bikes?.length > 0 &&
          bikes.map((b, i) => (
            <Grid key={b._id} item sm={3}>
              <BikeCard bike={b}></BikeCard>
            </Grid>
          ))}
        {bikes?.length === 0 && (
          <Typography sx={{ ml: 5 }} variant="h4">
            Sorry No bikes{" "}
          </Typography>
        )}
      </Grid>
    </Box>
  );
}
