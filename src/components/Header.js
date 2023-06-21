import React from "react";
import { Typography, Box } from "@mui/material";

import headerBackgroundImage from "../images/night_city.jpg";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${headerBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" align="center" color="#FFFFF0">
          Stéphane NGUYEN
        </Typography>
        <Typography variant="h4" align="center" gutterBottom color="#FFFFF0">
          Full Stack Software Engineer Apprentice
        </Typography>
      </Box>
    </>
  );
}
