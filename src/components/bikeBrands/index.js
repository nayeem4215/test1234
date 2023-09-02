import styled from "@emotion/styled";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ducatiSvgUrl from "../../icons/ducati.svg";
import hondaSvgUrl from "../../icons/honda.svg";
import yahamaSvgUrl from "../../icons/yahama.svg";

export default function BikeBrands() {
  return (
    <Paper sx={{ p: 5, mx: 2 }}>
      <Box>
        <Typography textAlign={"center"} variant="h2">
          Browse Your Favorite Brand Bike's
        </Typography>
        <Paper sx={{ display: "flex", justifyContent: "center", gap: 5, p: 5 }}>
          <LogoCard
            logoUrl={hondaSvgUrl}
            logoLabel="Honda"
            orgUrl={"/bikes/brands/honda"}
          ></LogoCard>
          <LogoCard
            logoUrl={yahamaSvgUrl}
            logoLabel="Yamaha"
            orgUrl={"/bikes/brands/yamaha"}
          ></LogoCard>
          <LogoCard
            logoUrl={ducatiSvgUrl}
            logoLabel="Ducativ"
            orgUrl={"/bikes/brands/ducati"}
          ></LogoCard>
        </Paper>
      </Box>
    </Paper>
  );
}

const LogoImg = styled.img`
  height: 40px;
`;
function LogoCard({ logoUrl, logoLabel, orgUrl }) {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 120,
        width: 200,
        cursor: "pointer",
      }}
      onClick={() => {
        navigate(orgUrl);
      }}
    >
      <LogoImg src={logoUrl} alt={logoLabel} />
      <Typography variant="h5">{logoLabel}</Typography>
    </Paper>
  );
}
