import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function BikeCard({ bike }) {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate("/bikes/" + bike._id, { replace: true });
      }}
      sx={{ p: 2, minHeight: 300 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={bike.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {bike.name}
          </Typography>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Brand : {bike.brand}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Distributor : {bike.distributor}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Model Year : {bike.modelYear}
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => {
              navigate("/bikes/" + bike._id);
            }}
            variant="outlined"
            color="primary"
          >
            View Details
          </Button>
          <Typography variant="h6">Price: {bike.price}$</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
