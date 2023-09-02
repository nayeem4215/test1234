import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getBikeById, recommendedBikes } from "../actions/bikes";
import BikesList from "../components/bikeList";

const BikeImage = styled.img`
  width: 100%;
  margin-top: 50px;
`;

export default function BikeDetailsPage() {
  const { id } = useParams();
  let [bike, setBike] = useState({});
  let [recommendated, setRecommendated] = useState([]);
  const location = useLocation();
  const [count, setRenderCount] = useState(0);
  console.log(count);

  // This component don't rerender due to issue in react router rom
  // That's why we have to do it manually

  useEffect(() => {
    setRenderCount((count) => count + 1);
    getBikeById(id, setBike);
    recommendedBikes(id, setRecommendated);
    window.scrollTo(0, 0);
  }, [location.pathname, id]);
  useEffect(() => {
    getBikeById(id, setBike);
    recommendedBikes(id, setRecommendated);
  }, []);
  return (
    <Box sx={{ mt: 9 }}>
      <Box sx={{ px: 10 }}>
        <Typography
          sx={{ background: "black", color: "#f4f4f4", p: 2 }}
          variant="h2"
          fontSize={40}
        >
          {bike?.name}'s Details
        </Typography>
        <Grid container spacing={5}>
          <Grid item sm={5}>
            <BikeImage src={bike?.img} alt={bike?.name} />
          </Grid>
          <Grid item sm={7}>
            <Box sx={{ my: 10 }}>
              <Typography variant="h5" color={"danger"}>
                Price : {bike?.price}$
              </Typography>
              <Typography variant="body1">
                Distributor : {bike?.distributor}$
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4">Key Specs of {bike?.name}</Typography>
              <Paper
                sx={{
                  p: 2,
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Box>
                  <Typography fontWeight={700} variant="h6">
                    Engine
                  </Typography>
                  <Typography variant="body1">{bike.power} Cc</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700} variant="h6">
                    Power
                  </Typography>
                  <Typography variant="body1">{bike.stroke} BHP</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700} variant="h6">
                    Torque
                  </Typography>
                  <Typography variant="body1">{bike.torque} NM</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700} variant="h6">
                    Mileage
                  </Typography>
                  <Typography variant="body1">{bike.mileage} Kmpl</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700} variant="h6">
                    Brakes
                  </Typography>
                  <Typography variant="body1">{bike.brakes}</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700} variant="h6">
                    Tyre Type
                  </Typography>
                  <Typography variant="body1">{bike.tireType}</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{ mt: 10, mx: 5 }} variant="h3">
          {bike.name} Specifications
        </Typography>
        <Paper elevation={3} sx={{ mt: 2, mx: 5, p: 5 }}>
          <Typography
            sx={{ background: "#eeeeee", p: 2, fontWeight: 700 }}
            variant="h6"
          >
            Bike Information
          </Typography>
          <Grid sx={{ p: 3 }} container spacing={5}>
            <Grid item sm={3}>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Bike Name:
              </Typography>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Bike Type:
              </Typography>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Made In:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Model Year:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.name}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.type}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.madeIn}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.modelYear}
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Assemble In :
              </Typography>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Brand:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.assembleIn}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.brand}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{ background: "#eeeeee", p: 2, fontWeight: 700 }}
            variant="h6"
          >
            Engine
          </Typography>
          <Grid sx={{ p: 3 }} container spacing={5}>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Engine:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Engine Type:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Power:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Displacement:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Clutch Type:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Torque:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.engine}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.engineType}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.power} cc
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.displacement}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.clutchType}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.torque} HM
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Stroke :
              </Typography>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Compression Ratio:
              </Typography>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Fuel Supply :
              </Typography>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Engine Cooling:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.stroke}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.compressionRatio}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.fuelSupply}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.engineCooling}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{ background: "#eeeeee", p: 2, fontWeight: 700 }}
            variant="h6"
          >
            Mileage & Top Speed
          </Typography>
          <Grid sx={{ p: 3 }} container spacing={5}>
            <Grid item sm={3}>
              <Typography fontWeight={700} sx={{ mb: 1.5 }} variant="body2">
                Mileage:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.mileage} Kmph
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{ background: "#eeeeee", p: 2, fontWeight: 700 }}
            variant="h6"
          >
            Chassis & Suspension
          </Typography>
          <Grid sx={{ p: 3 }} container spacing={5}>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Chassis Type:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.chassisType}
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Rear Suspension :
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.rearSuspension}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{ background: "#eeeeee", p: 2, fontWeight: 700 }}
            variant="h6"
          >
            Wheels & Tires
          </Typography>
          <Grid sx={{ p: 3 }} container spacing={5}>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Tire Type:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.tireType}
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Wheel Type:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.wheelType}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{ background: "#eeeeee", p: 2, fontWeight: 700 }}
            variant="h6"
          >
            Dimensions
          </Typography>
          <Grid sx={{ p: 3 }} container spacing={5}>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Overall Length:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Overall Width:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Height:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Weight:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.overallLength}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.overallWidth}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.height}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.weight}
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Wheelbase :
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Fuel Tank Capacity:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Seat Height:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.wheelbase}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.fuelTankCapacity}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.seatheight}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{ background: "#eeeeee", p: 2, fontWeight: 700 }}
            variant="h6"
          >
            Electronics
          </Typography>
          <Grid sx={{ p: 3 }} container spacing={5}>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Battery Type:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Headlight:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Indicators:
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Battery Voltage:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.batteryType}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.headLight}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.indicators}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.batteryVoltage}
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Tail Light :
              </Typography>
              <Typography sx={{ mb: 1.5 }} fontWeight={700} variant="body2">
                Speedo Meter:
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.tailLight}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1">
                {bike?.speedoMeter}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{ background: "#eeeeee", p: 2, fontWeight: 700 }}
            variant="h6"
          >
            Additional Features
          </Typography>
          <Box sx={{ p: 2 }}>
            <Typography fontWeight={700} variant="body1">
              {bike?.additionalFeatures}
            </Typography>
          </Box>
        </Paper>
        <Box sx={{ mt: 5 }}>
          <BikesList
            label={"More Bikes From " + bike.brand}
            bikes={recommendated?.sameBrandedBikes}
          />
        </Box>
        <Box sx={{ mt: 5 }}>
          <BikesList
            label={"Recommended Bikes For You "}
            bikes={recommendated?.closePricedBikes}
          />
        </Box>
      </Box>
    </Box>
  );
}
