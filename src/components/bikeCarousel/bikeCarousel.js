import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Grid, Box } from "@mui/material";
import styled from "@emotion/styled";
import { getNewlyArrivedBikes } from "../../actions/bikes";
import { useNavigate } from "react-router-dom";

export default function BikeCarousel({}) {
  let [bikeItems, setBikeItems] = useState([]);
  useEffect(() => {
    getNewlyArrivedBikes(setBikeItems);
  }, []);

  return (
    <Carousel>
      {bikeItems.length > 0 &&
        bikeItems.map((item, i) => <Item key={i} item={item} />)}
    </Carousel>
  );
}

const ItemImg = styled.img`
  height: 400px;
`;

function Item({ item }) {
  const naviagate = useNavigate();
  return (
    <Paper sx={{ p: 5, height: "60vh", overflow: "hidden" }}>
      <Typography sx={{ mb: 3 }} variant="h2">
        Recently Arrived{" "}
      </Typography>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <ItemImg src={item.img} alt={item.name}></ItemImg>
        </Grid>
        <Grid item sm={6}>
          <Box sx={{ mt: 5, ml: 10 }}>
            <Typography variant="h3">{item.name}</Typography>
            <Typography sx={{ mb: 3 }} variant="h6">
              Price : {item.price}$
            </Typography>
            <Button
              onClick={() => {
                naviagate("/bikes/" + item._id);
              }}
              size="large"
              variant="outlined"
              className="CheckButton"
            >
              Check it out!
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
