import React from "react";
import { Typography, Grid } from "@mui/material";

export default function Header() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Typography variant="h2" align="center">
          Stéphane NGUYEN
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          Full Stack Software Engineer Apprentice
        </Typography>
      </Grid>
    </Grid>
  );
}
