import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material/";
import { postBike } from "../actions/bikes";
import { AuthStatusContext } from "../context/userContext";

export default function CreateBikePage() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    brand: "",
    price: "",
    engine: "",
    engineType: "",
    power: "",
    displacement: "",
    stroke: "",
    compressionRatio: "",
    fuelSupply: "",
    engineCooling: "",
    transmissionType: "",
    clutchType: "",
    torque: "",
    mileage: "",
    chassisType: "",
    rearSuspension: "",
    brakes: "",
    frontBrakeType: "",
    frontBrakeDiameter: "",
    antiLockBrakingSystem: "",
    rearBrakeType: "",
    rearBrakeDiameter: "",
    brakingSystem: "",
    frontTireSize: "",
    rearTireSize: "",
    tireType: "",
    wheelType: "",
    overallLength: "",
    overallWidth: "",
    height: "",
    weight: "",
    wheelbase: "",
    fuelTankCapacity: "",
    seatHeight: "",
    batteryType: "",
    headLight: "",
    indicators: "",
    batteryVoltage: "",
    tailLight: "",
    speedoMeter: "",
    rpmMeter: "",
    seatType: "",
    engineKillSwitch: false,
    odoMeter: "",
    handleType: "",
    passengerGrabRail: false,
    additionalFeatures: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    postBike(formData);
  };

  console.log(useContext(AuthStatusContext));
  return (
    <form onSubmit={handleSubmit}>

      <TextField
        label="Made In"
        name="madeIn"
        value={formData.madeIn}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        name="name"
        label="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        label="Type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        variant="outlined"
        required
      />
      <TextField
        label="Distributor"
        name="distributor"
        value={formData.distributor}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        label="Model Year"
        name="modelYear"
        value={formData.modelYear}
        onChange={handleChange}
        variant="outlined"
        type="number"
      />
      <TextField
        label="Assemble In"
        name="assembleIn"
        value={formData.assembleIn}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        label="Brand"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        name="price"
        label="Price"
        value={formData.price}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
        required
      />

      <TextField
        name="engine"
        label="Engine"
        value={formData.engine}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        required
      />

      <FormControl variant="outlined" margin="normal">
        <InputLabel>Engine Type</InputLabel>
        <Select
          name="engineType"
          value={formData.engineType}
          onChange={handleChange}
          label="Engine Type"
          required
        >
          <MenuItem value="gas">Gas</MenuItem>
          <MenuItem value="diesel">Diesel</MenuItem>
          <MenuItem value="hybrid">Hybrid</MenuItem>
          <MenuItem value="electric">Electric</MenuItem>
        </Select>
      </FormControl>

      <TextField
        name="power"
        label="Power"
        value={formData.power}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
        required
      />

      <TextField
        name="displacement"
        label="Displacement"
        value={formData.displacement}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
      />

      <TextField
        name="stroke"
        label="Stroke"
        value={formData.stroke}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
      />

      <TextField
        name="compressionRatio"
        label="Compression Ratio"
        value={formData.compressionRatio}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="text"
      />
      <TextField
        name="fuelSupply"
        label="fuelSupply"
        value={formData.fuelSupply}
        onChange={handleChange}
        margin="normal"
        variant="outlined"

      />

      <TextField
        name="engineCooling"
        label="engineCooling"
        value={formData.engineCooling}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
  
      />

      <TextField
        name="transmissionType"
        label="transmissionType"
        value={formData.transmissionType}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
  
      />

      <TextField
        name="compressionRatio"
        label="Compression Ratio"
        value={formData.compressionRatio}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      
      />
      <TextField
        name="power"
        label="Power"
        value={formData.power}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
      />

      <TextField
        name="displacement"
        label="Displacement"
        value={formData.displacement}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
      />

      <TextField
        name="stroke"
        label="Stroke"
        value={formData.stroke}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
      />

      <TextField
        name="clutchType"
        label="Clutch Type"
        value={formData.clutchType}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        name="torque"
        label="Torque"
        value={formData.torque}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
      />

      <TextField
        name="mileage"
        label="Mileage"
        value={formData.mileage}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
      />

      <TextField
        name="chassisType"
        label="Chassis Type"
        value={formData.chassisType}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        name="rearSuspension"
        label="Rear Suspension"
        value={formData.rearSuspension}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        name="brakes"
        label="Brakes"
        value={formData.brakes}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        name="frontBrakeType"
        label="Front Brake Type"
        value={formData.frontBrakeType}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        name="frontBrakeDiameter"
        label="Front Brake Diameter"
        value={formData.frontBrakeDiameter}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="number"
      />

      <FormControl variant="outlined" margin="normal">
        <InputLabel>Anti-lock Braking System</InputLabel>
        <Select
          name="antiLockBrakingSystem"
          value={formData.antiLockBrakingSystem}
          onChange={handleChange}
          label="Anti-lock Braking System"
        >
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No</MenuItem>
        </Select>
      </FormControl>

      <TextField
        name="rearBrakeType"
        label="Rear Brake Type"
        value={formData.rearBrakeType}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="rearBrakeDiameter"
        name="rearBrakeDiameter"
        label="Rear Brake Diameter"
        value={formData.rearBrakeDiameter}
        onChange={handleChange}
      />

      <TextField
        id="brakingSystem"
        name="brakingSystem"
        label="Braking System"
        value={formData.brakingSystem}
        onChange={handleChange}
      />

      <TextField
        id="frontTireSize"
        name="frontTireSize"
        label="Front Tire Size"
        value={formData.frontTireSize}
        onChange={handleChange}
      />

      <TextField
        id="rearTireSize"
        name="rearTireSize"
        label="Rear Tire Size"
        value={formData.rearTireSize}
        onChange={handleChange}
      />

      <TextField
        id="tireType"
        name="tireType"
        label="Tire Type"
        value={formData.tireType}
        onChange={handleChange}
      />

      <TextField
        id="wheelType"
        name="wheelType"
        label="Wheel Type"
        value={formData.wheelType}
        onChange={handleChange}
      />

      <TextField
        id="overallLength"
        name="overallLength"
        label="Overall Length"
        value={formData.overallLength}
        onChange={handleChange}
      />
      <TextField
        id="overallWidth"
        name="overallWidth"
        label="Overall Width"
        value={formData.overallWidth}
        onChange={handleChange}
      />
      <FormControl>
        <TextField
          label="Height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Wheelbase"
          name="wheelbase"
          value={formData.wheelbase}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Fuel Tank Capacity"
          name="fuelTankCapacity"
          value={formData.fuelTankCapacity}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Seat Height"
          name="seatHeight"
          value={formData.seatHeight}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Battery Type</InputLabel>
        <Select
          name="batteryType"
          value={formData.batteryType}
          onChange={handleChange}
        >
          <MenuItem value="lithium">Lithium-ion</MenuItem>
          <MenuItem value="leadacid">Lead-acid</MenuItem>
          <MenuItem value="nickelmetalhydride">Nickel-metal hydride</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <TextField
          label="Headlight"
          name="headLight"
          value={formData.headLight}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Indicators"
          name="indicators"
          value={formData.indicators}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Battery Voltage"
          name="batteryVoltage"
          value={formData.batteryVoltage}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Tail Light"
          name="tailLight"
          value={formData.tailLight}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Speedometer"
          name="speedoMeter"
          value={formData.speedoMeter}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="RPM Meter"
          name="rpmMeter"
          value={formData.rpmMeter}
          onChange={handleChange}
        />
      </FormControl>
      <TextField
        label="Seat Type"
        name="seatType"
        value={formData.seatType}
        onChange={handleChange}
        variant="outlined"
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={formData.engineKillSwitch}
            onChange={handleChange}
            name="engineKillSwitch"
          />
        }
        label="Engine Kill Switch"
      />
      <TextField
        label="Odometer"
        name="odoMeter"
        value={formData.odoMeter}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        label="Handle Type"
        name="handleType"
        value={formData.handleType}
        onChange={handleChange}
        variant="outlined"
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={formData.passengerGrabRail}
            onChange={handleChange}
            name="passengerGrabRail"
          />
        }
        label="Passenger Grab Rail"
      />
      <TextField
        label="Additional Features"
        name="additionalFeatures"
        value={formData.additionalFeatures}
        onChange={handleChange}
        multiline
        rows={4}
        variant="outlined"
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
