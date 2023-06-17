import React from "react";
import { Typography, Grid } from "@mui/material";

export default function Header() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Typography variant="h1" align="center">
          Stéphane NGUYEN
        </Typography>
        <Typography variant="h3" align="center">
          Full Stack Software Engineer Apprentice
        </Typography>
      </Grid>
    </Grid>
  );
}
