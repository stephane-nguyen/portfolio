import React from "react";
import { Typography, Box } from "@mui/material";

import headerBackgroundImage from "../images/blue_sky_img.jpg";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${headerBackgroundImage})`,
          backgroundSize: "100% 100%",
        }}
      >
        <Typography variant="h2" align="center" color="white">
          Stéphane NGUYEN
        </Typography>
        <Typography variant="h4" align="center" gutterBottom color="white">
          Full Stack Software Engineer Apprentice
        </Typography>
      </Box>
    </>
  );
}
