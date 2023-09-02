import { Paper, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Paper
      sx={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1">copyright@nayeem</Typography>
    </Paper>
  );
}
